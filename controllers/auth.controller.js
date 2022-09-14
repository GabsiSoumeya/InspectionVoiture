const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
};  

module.exports.signUp = async (req, res) => {
 
  //const {email, password, firstName,lastname, gender, phone} = req.body
  const {email, password, profile :{firstName,lastName , gender}, phone} = req.body
 console.log("gdfdhd",req.body)

  try {
    const user = await User.create( {email, password, profile :{firstName,lastName , gender}, phone} );
    res.status(201).json({ user: user._id});
  }
  catch(err) {
    console.log(err);

    const errors = signUpErrors(err);
    res.status(400).send({ errors });
    console.log(err);
  }
}


module.exports.signIn = async (req, res) => {
  const { email, password, confirmPassword } = req.body
  console.log("logiiiiiinnnnnnnn",req.body)



  try {
    const user = await User.login(email, password, confirmPassword);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge});
    res.status(200).json({ user: user._id})
  } 
  catch (err){
    const errors = signInErrors(err);
    res.status(401).json({ err });
  }
}

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}

module.exports.postResetPassword = async (req, res) => {
  try {
    const { password, resetToken } = req.body

    if (!resetToken || !password)
      return res.status(400).json({ error: 'Invalid Request' })

    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex')

    const user = await schemaName.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    })

    if (!user)
      return res.status(400).json({ error: 'Invalid Token or expired' })

    user.password = password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    res.status(200).json({ message: 'Password has been reset' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports.postForgotPassword = async (req, res) => {
  try {
    const { email } = req.body
    if (!email)
      return res.status(400).json({ error: 'Please enter your email' })

    const user = await schemaName.findOne({ email })
    if (!user)
      return res.status(404).json({ error: 'No email could not be send' })

    const resetToken = user.getResetPasswordToken()
    await user.save()

    const resetUrl = `http://localhost:5000/auth/reset-password/${resetToken}`
    const message = forgotMessage(resetUrl, user)

    const result = sendEmail({
      to: user.email,
      subject: 'Password Reset Request',
      text: message,
    })

    if (await result)
      return res.status(200).json({
        message: `An email has been sent to ${email} with further instructions.`,
      })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
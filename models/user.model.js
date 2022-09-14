const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const crypto =require('crypto');
const { Schema } = mongoose;
const options = { discriminatorKey: 'userType', timestamps: true, collection: 'users' };
const userSchema = new mongoose.Schema(
  {
    profile: {
      firstName: { type: String, default: '', required: false },
      lastName: { type: String, default: '', required: false },
    
      gender :{ type: String, enum: ['MALE', 'FEMALE', 'OTHER', ''], default: '' },

      phone: String,
    },
    
    email: {
      type: String,
      required: true,
      validate: [isEmail], 
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,  
      minlength: 6
    },

    userType: {
      type: String,
      enum: ['ADMIN', 'USER', 'CLIENT', 'INSPECTEUR'],
      default: 'ADMIN',
      required: false,
   },

/*{
   {
    timestamps: true,
  };
}
*/
   isDeleted: { type: Boolean, default: false },
  hasAccess: { type: Boolean, default: false },
  owner: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },},options);

//password

  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
  }
  
  // encrypt password before saving into mongoDB
  userSchema.methods.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  }



userSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//.....
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString('hex')

  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  this.resetPasswordExpire = Date.now() + 3 * 24 * 60 * 60 * 1000 // 3 jours

  return resetToken
}





userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user != null) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email')
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
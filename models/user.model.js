const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
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
      required: true,
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

 
// play function before save into display: 'block',
userSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

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
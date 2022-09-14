import mongoose from 'mongoose'

const profileSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    dateNaissace:Date,
    address: String,
   
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true }
)

const Profile = mongoose.model('Profile', profileSchema)
export default Profile;
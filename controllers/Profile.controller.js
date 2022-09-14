import Profile from '../models/Profile.model.js'
import user from '../models/user.model.js'


const schemaName = Profile
//const schemaNameString = 'Profile'


export const getProfile = async (req, res) => {
    try {
      const { _id } = req.user
      const objects = await schemaName
        .findOne({ user: _id })
        .lean()
        .sort({ createdAt: -1 })
        .populate('user', ['name', 'email', 'confirmed', 'blocked'])
  
      res.status(200).send(objects)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
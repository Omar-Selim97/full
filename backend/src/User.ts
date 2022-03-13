import mongoose from 'mongoose';

const user = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
  
},
{
    timestamps: true
});

export default mongoose.model("User", user);

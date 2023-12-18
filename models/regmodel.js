import { models, model } from "mongoose";
import { Schema } from "mongoose";
import { Mongoose } from "mongoose";
import { mongoose } from "mongoose"


const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
    },
    stack: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
    },

  }, { timestamps: true }
)


const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
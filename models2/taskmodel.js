import mongoose from "mongoose"
import { Schema } from "mongoose"
import { model, models } from "mongoose"


const taskSchema = new Schema(
  {
    title: "string",
    description: "string",
  },
  {
    timestamps: true
  }
)

const task = mongoose.models.task || mongoose.model("task", taskSchema);
export default task;


// import mongoose, { model, Schema } from 'mongoose';

// const taskSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

// export default Task;
// import connectMongoDB from "@libs/mongodb"
import { connectDb } from "@/mongoconnect/connectDb";
// import Topic from "@models/topic"
import task from "@/models2/taskmodel";
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {

  const { id } = params;

  const { newTitle: title, newDescription: description } = await request.json();
  await connectDb();
  await task.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "Task Updated" }, { status: 200 });

}
//we  will write the code for finding one by id here because here deals with the api where id route is created
export async function GET(request, { params }) {


  const { id } = params;
  await connectDb();

  const foundtask = await task.findOne({ _id: id });


  return NextResponse.json({ foundtask }, { status: 200 })


}

export async function DELETE(request, { params }) {
  const { id } = params;

  await connectDb(); // Connect to the database

  await task.findByIdAndDelete(id); // Delete the task with the specified ID

  return NextResponse.json({ message: "Task Deleted" }, { status: 200 });
}




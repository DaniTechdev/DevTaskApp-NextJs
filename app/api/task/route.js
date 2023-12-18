import { connectDb } from "@/mongoconnect/connectDb";
import { NextResponse } from "next/server";
// import { task } from "@/models2/taskmodel";
import task from "@/models2/taskmodel"

// create a async funtion to create topic which will be a post method and will take in a response as parameter 
export async function POST(request) {

  const { title, description } = await request.json();

  await connectDb()

  const Task = await task.create({ title, description })

  return NextResponse.json({
    message: "Task created",
    body: { Task }
  }, { status: 201 })

}

export async function GET() {
  await connectDb()
  const tasks = await task.find()
  return NextResponse.json({ tasks })
}

export async function DELETE(request) {
  // we wil use searchParam to search for a particular id and use the id to delete the topic object
  const id = request.nextUrl.searchParams.get("id")
  await connectDb()
  await task.findByIdAndDelete(id)

  return NextResponse.json({ message: "Task deleted" }, { status: 201 })

}
// export async function DELETE(request, { params }) {
//   const { id } = params;

//   await connectDb(); // Connect to the database

//   await task.findByIdAndDelete(id); // Delete the task with the specified ID

//   return NextResponse.json({ message: "Task Deleted" }, { status: 200 });
// }
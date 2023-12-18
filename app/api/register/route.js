import { connectDb } from "@/mongoconnect/connectDb";
import User from "@/models/regmodel";
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";

export async function POST(req) {


  try {
    const { username, email, stack, password } = await req.json();
    //for duplictate email


    await connectDb()
    // const duplicate = await User.findOne({ email: email })
    const duplicate = await User.findOne({ email: email }).lean().exec();

    if (duplicate) {
      return NextResponse.json({
        message: "Duplicate Email"
      }, {
        status: 400
      })
    }
    const hashPassword = await bcrypt.hash(password, 10);



    const newUser = await User.create({ username, email, stack, password: hashPassword })

    return NextResponse.json({
      newUser,
    },
      { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: "An error occured while registering the user" })

  }

}
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'




const RegisterUser = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    stack: "",
    password: "",
  });

  const [error, setError] = useState("")

  const [registered, setRegistered] = useState("")

  // console.log(formData);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });

  // };

  const submitForm = async (e) => {
    e.preventDefault()


    if (!formData.username || !formData.email || !formData.stack || !formData.password) {
      setRegistered("")
      setError("All field are required")
      return
    }
    // const { email } = formData

    console.log("hello, this is register page");

    try {

      // const resUserExists = await fetch("api/userExists", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(formData)
      // })

      // const user = await resUserExists.json()
      // console.log(user);

      // if (user) {
      //   setError("user already exists")
      //   return;
      // }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.refresh()
        // router.push("/register")

        console.log("form submitted successfully");
        // console.log(Data);
        setTimeout(() => {
          // setRegistered("")
          setRegistered("Resgisteration successfull")
        }, 3000)

        setError("")
      } else {
        const data = await res.json()
        const errorMessage = data.message;
        setError(errorMessage);
        console.log("failed to create register user");
        console.log(errorMessage);
        setRegistered("")
        // console.log(Data);

      }
      console.log(formData);
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
    // setTopic({
    //   title: "",
    //   description: ""
    // })
    // console.log(topicList);

  }

  return (
    <div className="Parent mx-auto h-screen bg-slate-300 flex flex-column justify-center items-center">
      <div className="border border-slate-400 p-8">
        <p className="text-xl font-bold">SIGN UP</p>
        <div>
          <form onSubmit={submitForm} >
            <div className="flex flex-col mt-12 w-[360px]">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-black">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Your username"
                  name="username"
                  className="p-2 mt-2 mb-2 outline-none rounded-md border border-slate-500"
                  onChange={handleChange}
                  value={formData.username}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-black mt-4 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="p-2 outline-none rounded-md border border-slate-500"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div className="mt-4 mb-2">
                <label className="text-md mt-4">Choose Your Stack</label>
                <select
                  className="w-full border-2 border-slate-400 font-normal py-2 text-sm"
                  name="stack"
                  value={formData.stack}
                  onChange={handleChange}
                >
                  <option value="">Select a Stack</option>
                  <option value="FrontEnd">FrontEnd</option>
                  <option value="BackEnd">BackEnd</option>
                  <option value="MERN Stack">MERN Stack</option>
                  <option value="Full Stack">Full Stack</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-black mt-4 ">Password</label>
                <input
                  type="password"
                  placeholder="Your password"
                  name="password"
                  className="p-2 rounded-md border outline-none mb-4 border-slate-500"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <button
                type="submit"
                className="p-2 rounded-md border border-slate-500 w-full bg-slate-400 text-slate-900 font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {error && (<div className="bg-red-500 text-white  text-sm py-2 px-3 rounded-md mt-2 mx-auto">
          {error}</div>)}
        {
          registered && (<div className="bg-green-700 text-white w-fit text-sm py-1 px-3 rounded-md mt-1">
            {registered}</div>)
        }
        <Link href={"/"}><p className="mt-4">Already have an account? <span className=" underline">Login</span></p></Link>
      </div >
    </div >
  );
};

export default RegisterUser







"use client"

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const AddTask = () => {

  // const [topicList, setTopicList] = useState([])

  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const router = useRouter();

  const handlechange = (e) => {

    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
    console.log(task)

  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log("Clicked submit");


    // You don't neccessary need
    if (task.title === "" || task.description === "") {
      alert("All input field needed")
    }

    try {
      if (task.title === "" || task.description === "") {
        return;
      }

      const res = await fetch("/api/task", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ title: task.title, description: task.description })
      })

      if (res.ok) {
        // router.push("/")
        setTask({ title: "", description: "" });
        router.refresh()
        console.log({ title: task.title, description: task.description });
      } else {
        console.log("failed to create a topic");
      }

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


    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

        <input
          name="title"
          onChange={handlechange}
          className=' border border-slate-500 px-8 py-2'
          type='text'
          placeholder='Task Title'
          value={task.title}

        />

        <input
          name="description"
          onChange={handlechange}
          className=' border border-slate-500 px-8 py-2 '
          type='text' placeholder='Task Description'
          value={task.description} />

        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'> Add Task</button>
      </form>
      <div>

      </div>
    </div>
  )
}

export default AddTask

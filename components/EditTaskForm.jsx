"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditTaskForm = ({ task, id }) => {


  const router = useRouter()
  console.log(id);
  // const [newTitle, setNewTitle] = useState(topic.title)


  // const [newDescription, setNewDescription] = useState(topic.description)
  // console.log(id);


  const [newTask, setNewTask] = useState({
    newTitle: task.title,
    newDescription: task.description
  })
  //   ;

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch(`/api/task/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newTitle: newTask.newTitle, newDescription: newTask.newDescription })
      })

      router.push("/homepage")
      router.refresh()
    } catch (error) {
      console.log(error);
    }


  }
  // console.log();


  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

      <input
        onChange={handleChange}
        value={newTask.newTitle}
        name='newTitle'
        className=' border border-slate-500 px-8 py-2' type='text' placeholder='Task Title' />

      <input
        onChange={handleChange}
        name='newDescription'
        value={newTask.newDescription}
        className=' border border-slate-500 px-8 py-2 ' type='text' placeholder='Task Description' />

      <button

        className='bg-green-600 font-bold text-white py-3 px-6 w-fit'> Update Task</button>
    </form>
  )
}

export default EditTaskForm

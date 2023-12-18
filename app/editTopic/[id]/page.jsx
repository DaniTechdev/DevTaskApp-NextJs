"use client"
import EditTaskForm from '@/components/EditTaskForm'
import React, { useEffect, useState } from 'react'
//we avoided uing "use client by defining the get by id api by defining it outside the component and then called the function inside"
import { getServerSession } from 'next-auth/next';



const EditTopic = ({ params }) => {

  const { id } = params
  console.log(id);
  const [task, setTask] = useState()
  console.log(task);

  useEffect(() => {

    const fetchData = async (id) => {

      try {
        const res = await fetch(`/api/task/${id}`, { cache: "no-store" });

        if (!res.ok) {
          throw new Error("failed to fetch topic")
        }
        else {
          const taskData = await res.json()
          setTask(taskData.foundtask)
          console.log(taskData.foundtask);
          return taskData.foundtask
        }

      } catch (error) {
        console.log(error);
      }

    }
    fetchData(id)


  }, [id])


  return (
    <div>
      {(task && id) ? (
        <EditTaskForm task={task} id={id} />
      ) : (
        <p>Loading...</p> // You can add a loading indicator here.
      )}
    </div>
  )
}



export default EditTopic

"use client"

// TopicList.js

import React, { useState, useEffect } from 'react';
import Removebtn from './Removebtn';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';
// import AddTaskOverlay from './AddTaskOverlay';
import AddTaskOverlay from './addOverlay';

export default function TopicList() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddTaskOverlay, setShowAddTaskOverlay] = useState(false);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const response = await fetch("/api/task", { cache: "no-store" });
        if (response.ok) {
          const data = await response.json();
          setTopics(data.tasks);
          setIsLoading(false);
        } else {
          console.log('failed to fetch data');
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error loading topics", error);
        setIsLoading(false);
      }
    };

    getTopic();
  }, []);

  const renderingList = topics.map((topic) => {
    return (
      <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start' key={topic._id}>
        <div>
          <h2 className='font-bold text-2xl'>{topic.title}</h2>
          <div className='font-bold'>{topic.description}</div>
        </div>
        <div className='flex gap-2'>
          <Removebtn id={topic._id} />
          <Link href={`/editTopic/${topic._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    );
  });

  const handleAddTaskClick = () => {
    setShowAddTaskOverlay(true);
  };

  const handleCloseAddTaskOverlay = () => {
    setShowAddTaskOverlay(false);
  };

  return (
    <>
      {isLoading ? (
        <h1 className="flex flex-row items-center justify-center">Please wait, fetching tasks data</h1>
      ) : (
        renderingList
      )}

      {showAddTaskOverlay && <AddTaskOverlay onClose={handleCloseAddTaskOverlay} />}

      {/* Add a button to trigger the overlay */}
      <button
        onClick={handleAddTaskClick}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Task
      </button>
    </>
  );
}



// import React from 'react'
// import Removebtn from './Removebtn'
// import Link from 'next/link'
// import { HiPencilAlt } from "react-icons/hi"
// import { useState, useEffect } from 'react'

// // const getTopic = async () => {
// //   try {
// //     const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });
// //     if (!res.ok) {
// //       console.log("fail to fetch");

// //       return res.json();
// //     }
// //   } catch (error) {
// //     console.log("error loading topics", error);
// //   }
// // }




// export default function TopicList() {

//   const [topics, setTopics] = useState([])

//   const [isLoading, setIsloading] = useState(false)

//   useEffect(() => {
//     const getTopic = async () => {
//       try {
//         const response = await fetch("/api/task", { cache: "no-store" })
//         if (response.ok) {
//           const data = await response.json()
//           // console.log(data);
//           console.log(data);
//           setTopics(data.tasks)
//           // console.log(topics);
//           console.log(data.tasks);
//           setIsloading(false)

//         } else {
//           console.log('failed to fetch data');
//           setIsloading(false)
//         }
//       } catch (error) {
//         console.log("Error loading topics", error);
//         setIsloading(false)
//       }
//     }
//     getTopic()
//   }, [])

//   // console.log(topics[0]);
//   // console.log(topics[1]);

//   const renderingList = topics.map((topic) => {
//     return (
//       <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start' key={topic._id}>
//         <div>
//           <h2 className='font-bold text-2xl'>{topic.title}</h2>
//           <div className='font-bold'>{topic.description}</div>
//         </div>
//         <div className='flex gap-2'>
//           <Removebtn id={topic._id} />
//           <Link href={`/editTopic/${topic._id}`}>
//             <HiPencilAlt size={24} />
//           </Link>
//         </div>
//       </div>
//     );
//   });



//   // const { topics } = await getTopic()
//   // console.log(topics);
//   return (
//     <>
//       {isLoading ? (<h1 className="flex flex-row items-center justify-center">please wait, fatching tasks data</h1>) :
//       (renderingList)}
//     </>
//   )
// }

// // export default TopicList

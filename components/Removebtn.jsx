"use client"

import React from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from 'next/navigation';

const Removebtn = ({ id }) => {

  console.log(id);
  const router = useRouter();
  const deleteClick = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/task?id=${id}`, { method: "DELETE", });

      if (res.ok) {
        window.location.reload(true);
      };

    };
  };


  return (
    <button onClick={deleteClick} className='text-red-800'>
      <HiOutlineTrash size={24} />
    </button>
  )
}

export default Removebtn

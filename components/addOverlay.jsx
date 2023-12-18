// // AddTaskOverlay.js
// AddTaskOverlay.js

import React from 'react';
import Link from 'next/link';

const AddTaskOverlay = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <p className="text-lg font-semibold mb-4">Welcome to the Task Manager!</p>
        <p className="text-gray-600 mb-6">Click the button below to add a new task.</p>
        <Link href="/addTask">
          <Link href={"/addTask"}
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Task
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default AddTaskOverlay;

// import React from 'react';

// const AddTaskOverlay = ({ onAddTaskClick }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white p-6 rounded-md">
//         <p className="text-lg font-semibold mb-4">Welcome to the Task Manager!</p>
//         <p className="text-gray-600 mb-6">Click the button below to add a new task.</p>
//         <button
//           onClick={onAddTaskClick}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Add Task
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddTaskOverlay;

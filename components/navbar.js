
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";



const Nav = async () => {
  const session = await getServerSession(options);
  console.log(session);


  console.log("Navbar activated");
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between  items-center w-full px-10 py-4">
        <div>Task App For Developers</div>
        {session ? (
          <div className="flex gap-4 italic text-blue-500">
            <h1>Wecome {session?.user?.name}
            </h1>
            <h2> Email: {session?.user?.email}
            </h2>
          </div>) : null}
        <div className="flex gap-10">
          <Link href="/Profile">Member</Link>
          {session && <Link href="/homepage">View Tasks</Link>}

          {!session && <Link href="/register">Register</Link>}

          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}

        </div>
      </nav>
    </header>
  );
};

export default Nav;


// import Link from 'next/link'
// import React from 'react'
// // import { getServerSession } from "next-auth"
// import { getServerSession } from "next-auth/react";

// import { options } from '../api/auth/[...nextauth]/options'

// const Nav = async () => {

//   const session = await getServerSession(options)

//   return (
//     <header className="bg-gray-600 text-gray-100">
//       <nav className="flex justify-between items-center w-full px-10 py-4">
//         <div>my site</div>
//         <div className="flex gap-10">
//           <Link href="/">Home</Link>
//           <Link href="/CreateUser"> Create User </Link>
//           <Link href="/ClientMember">Client Member </Link>
//           <Link href="/Member">Member</Link>
//           <Link href="/">Public</Link>
//           {session ? (<Link href="api/auth/signout?callbackUrl=/">Logout</Link>) : (<Link href="api/auth/sigin">Login</Link>)}
//         </div>
//       </nav>

//     </header>
//   )
// }

// export default Nav
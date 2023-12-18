// // "use client"
// import Image from 'next/image'
// import Link from "next/link";
// import { options } from './api/auth/[...nextauth]/options';
// import { getServerSession } from 'next-auth/next';
// import { redirect } from 'next/navigation';

// export default async function Home({ props }) {

//   const session = await getServerSession(options);

//   if (session) {
//     // Redirect to homepage if logged in
//     return <redirect to="/homepage" />;
//   }

//   console.log("hello welcome to the app", session);

//   return (

//     <div>

//       {session ? (<redirect to="/homepage" />) : (<div className="flex flex-col h-screen bg-slate-100 justify-center items-center">
//         <div className="text-4xl font-black italic">Welcome to Developers Task App</div>
//         <br />
//         <Link href="/register" className="text-blue-500 underline">
//           Don't have account yet? Register
//         </Link>
//         {session ? (
//           <Link href="/api/auth/signout?callbackUrl=/" className="text-blue-500 underline">Logout</Link>
//         ) : (
//           <Link href="/api/auth/signin" className="text-blue-500 ">Already have an account? <span className="underline">Login</span></Link>
//         )}
//       </div>)}


//     </div>

//   )
// }

// import Image from 'next/image'
import Link from "next/link";
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

export default async function Home() {
  const session = await getServerSession(options);

  if (session) {
    // Redirect to homepage if logged in
    return (
      <div>
        <p>...</p>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function() {
                window.location.href = '/homepage';
              }, 0);
            `,
          }}
        />
      </div>
    );
  }

  console.log("hello welcome to the app", session);

  return (
    <div className="flex flex-col h-screen bg-slate-100 justify-center items-center">
      <div className="text-4xl font-black italic">Welcome to Developers Task App</div>
      <br/>
      <Link href="/register" className="text-blue-500 underline">
        Don't have an account yet? Register
      </Link>
      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/" className="text-blue-500 underline">
          Logout
        </Link>
      ) : (
        <Link href="/api/auth/signin" className="text-blue-500">
          Already have an account? <span className="underline">Login</span>
        </Link>
      )}
    </div>
  );
}


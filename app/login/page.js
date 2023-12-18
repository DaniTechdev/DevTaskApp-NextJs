import React from 'react'

const Login = () => {

  
  return (
    <div className="flex flex-col justify-center items-center h-screen" >
    <div className="flex flex-col justify-c w-[345px] h-[300px] rounded-[6px] pl-4 shadow-lg border-t-4  border-green-400">
      <h1 className="font-bold my-4 text-xl w-auto mb-4">Enter the details</h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-full p-4">
        <input type="email" placeholder="test@gmail.com" onChange={(e) => {
          SetEmail(e.target.value)
          console.log(email);
        }} />
        <input type="password" placeholder="Your password" onChange={(e) => {
          SetPassword(e.target.value)
          console.log(password);
        }} />
        <button className="mx-auto border-2 rounded-2 bg-green-800 p-2 text-white w-full">Login</button>
      </form>
      {error && (<div className="bg-red-500 tet-white w-fit text-sm py-2 px-3 rounded-md mt-2">
        {error}</div>)}
      <Link href={"/register"}><p className="mt-8">Don't have an acount? <span className=" underline">Register</span></p></Link>
    </div>

  </div >
  )
}

export default Login
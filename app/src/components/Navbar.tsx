import React from 'react'

function Navbar() {
  return (
    <div className='fixed flex p-8 shadow-md w-full bg-white z-20'>
        <a className="" href="">Home</a> 
        <div className="ml-auto">
            <a className="p-4" href="">blog</a>  
            <a className="p-4 text-white bg-blue-500 rounded-md mx-2" href="">contact</a> 
        </div>
      </div>
  )
}

export default Navbar
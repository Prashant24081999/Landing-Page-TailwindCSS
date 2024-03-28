import React from 'react'

function Body() {
  return (
    <div className='lg:flex gap-12 lg:flex-row-reverse lg:items-center lg:justify-center lg:my-48'>
      <div className='lg:flex-1'>
        <img src="../../src/assets/image.jpeg" alt="image" className='w-64 ml-6 md:h-80 md:ml-32 md:w-96 md:justify-center'/>
     </div>
      <div className='lg:flex-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes</h1>
        <p className='font-lato text-grey-400 my-4 md:text-2xl'>With Hostinger, get your website up and running in no less than 5 minutes with the most compettitve pricing packages
        </p>
        <form action="" className='flex flex-col gap-4 md:flex-row'>
            <input type="email" placeholder='Enter email address' className='rounded-md px-4 py-3 placeholder:text-gray-400'/>
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </form>
        <div className='flex gap-2 flex-row font-lato my-3'>
        <span><i className="fa-solid fa-circle-check text-emerald-400"></i> No spam ever. Unsubscribe anytime.</span>
        </div>
      </div>
    </div>
  )
}

export default Body
Body
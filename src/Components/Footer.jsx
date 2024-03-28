import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-400'>
        <li>
            <a href="">Facebook</a>
        </li>
        <li>
            <a href="">Instagram</a>
        </li>
        <li>
            <a href=""><span className='text-bold'>X</span></a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="../../src/assets/profile-picture.jpeg" alt="profile-picture" className='w-10 rounded-full'/>
        <div>
            <p className='font-playfair'>Have any Questions?</p>
            <a href="#" className='font-lato font-medium'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
Footer
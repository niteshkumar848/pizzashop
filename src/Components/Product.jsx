import React from 'react'

export default function Product() {
  return (
   <>
    <div>
          <img src='/images/p1.png' alt='paporini' />
          <div className='text-center'>
            <h2 className='text-lg font-bold my-8'>Havana special</h2>
            <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>Small</span>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <span>₹ 500</span>
            <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold'>Add</button>
          </div>
        </div>
   </>
  )
}

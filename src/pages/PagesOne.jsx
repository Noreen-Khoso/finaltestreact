import React from 'react'

const PagesOne = () => {
  return (
    <div className='/pagetwo'>
        <div className='h-screen w-screen flex items-center justify-center bg-gray-200'>
        
            <div className=' flex items-center flex-col gap-4 '>
            <h1 className=' text-2xl font-bold text-blue-400'>Page one</h1>
                <input type="text" placeholder='Type' className='px-10 py-2 focus:outline-none bg-white text-black/50' />
                <textarea name="" id=""   className=' mx-10 px-10 text-lg py-2 text-black/50 focus:outline-none'></textarea>

            </div>

        </div>

    </div>
  )
}

export default PagesOne;
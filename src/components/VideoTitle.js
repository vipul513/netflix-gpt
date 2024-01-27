import React from 'react'

const VideoTitle = ({title, overview}) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='p-6 text-lg w-1/4'> {overview} </p>
            <div className=''>
                <button className='bg-gray-300 text-black py-3 px-12 rounded-md text-lg font-bold hover:bg-opacity-80'>
                    ▶️ Play</button>
                <button className='bg-gray-300 text-black py-3 px-12 rounded-md text-lg mx-2 font-bold hover:bg-opacity-80'>
                More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;
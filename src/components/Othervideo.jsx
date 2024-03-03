import React from 'react'

function Othervideo() {
    return (
        <>
            <div className="w-ful pl-[3.6vw] flex justify-end pr-[3.6vw] my-[1.4vw]">
                <div className="w-[] relative h-[14.6vw] overflow-hidden gap-[0.4vw] flex justify-between p-[0.7vw] bg-white">
                    <video className='bg-center' src="/public/images/Oz movie.mkv" controls alt="" />
                    <div className="text-[0.8vw] px-[0.2vw] rounded flex items-end bottom-[5%] right-[2.3%] bg-pink-400 absolute bg--500 text-black">4:27 PM</div>
                </div>
            </div>
        </>
    )
}

export default Othervideo

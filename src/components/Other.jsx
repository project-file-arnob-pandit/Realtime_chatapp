import React from 'react'


function Other(props) {
    return (
        <>
            <div className="w-full pl-[5.8vw] pr-[3vw] mb-1 text-[1.3vw] flex justify-end text-black">
                <div className="flex m-[0.7vw]">
                    <span className="bg-white px-[1.4vw] py-[0.3vw]">{props.othersms}</span>
                    <span className="bg-white flex items-end  text-[0.8vw] px-[0.7vw] py-[0.3vw] ">{props.time}</span>
                </div>
            </div>
        </>
    )
}

export default Other

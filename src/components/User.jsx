import React from 'react'

function User(props) {
    return (
        <>
            <div className=" w-full pl-[2.9vw] pr-[6.5vw] mb-1 rounded-[0.7vw] text-[1.3vw] text-left text-black bg-">
                <div className="flex m-[0.7vw] ">
                    <span className="bg-white text-wrap px-[0.7vw] py-[0.3vw]">{props.usersms}</span>
                    <span className="bg-white flex items-end  text-[0.8vw] px-[0.7vw] py-[0.3vw] ">{props.time}</span>
                </div>
            </div>
        </>
    )
}

export default User

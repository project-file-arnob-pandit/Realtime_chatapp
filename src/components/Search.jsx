import React from 'react'
import { FaArrowLeft } from "react-icons/fa"
import { IoMdSearch } from "react-icons/io"
import { IoFilter } from "react-icons/io5";

function Search() {
    return (
        <div className="w-full h-full p-[4px] flex flex-row rounded">
            <div className=" h-full w-[50px] text-[20px] flex justify-end items-center bg-white rounded-bl-[20px] rounded-tl-[20px] text-black">
                <span id='arrowicon' className="hidden"><FaArrowLeft /></span>
                <span id='searchicon' className=" text-[20px]"><IoMdSearch /></span>
            </div>
            <input id='inputbox' className="h-full w-full outline-none rounded-br-[20px] rounded-tr-[20px] text-black text-[15px] pl-[20px] font-serif " type="text" placeholder="Search or start a new chat...." />
            <div className=" h-full w-[50px] flex justify-center items-center cursor-pointer bg-gray-100 ml-[6px] text-[20px] text-black">
            
            <IoFilter />
            </div>
        </div>
    )
}

export default Search
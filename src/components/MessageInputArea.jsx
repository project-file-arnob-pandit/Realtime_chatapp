import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdInsertEmoticon } from "react-icons/md";

const MessageInputArea = () => {
    return (
        <div className="w-full h-[50px] flex text-black  bg-[#F0F2F5]">
            <div className="w-full p-2 pl-4 pr-4 h-[100%] flex justify-between items-center">
                <div className=" flex gap-[10px]">
                    <MdInsertEmoticon />
                    <IoMdAdd />
                </div>
                <input
                    type="text"
                    className="outline-none text-[18px] bg-transparent ml-[20px] w-full"
                    placeholder="Type a Massage"
                    name=""
                    id=""
                />
                <div className="flex w-[40px] justify-center items-center hover:bg-green-500 transition cursor-pointer rounded-[50%] p-[10px] h-[40px]">
                    <FaMicrophone />
                </div>
            </div>
        </div>
    );
};

export default MessageInputArea;

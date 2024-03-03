import React from "react";
import { RxCross2 } from "react-icons/rx";
import { MdBlock } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

function Showcontact({ closeContact }) {
    const { userProfile, setUserProfile } = useContext(userContext);

    return (
        <div className="w-[500px] h-full bg-[#F0F2F5] overflow-auto">
            {/* top bar */}
            <div className=" w-full h-[60px] capitalize text-[19px] pl-[20px] flex items-center text-black bg-[#F0F2F5]">
                <span
                    className="cursor-pointer"
                    onClick={() => {
                        closeContact(false);
                    }}
                >
                    <RxCross2 />
                </span>
                <span className="ml-4">contact info</span>
            </div>
            {/* img box */}
            <div className=" mb-[10px] flex items-center justify-evenly flex-col text-black p-[10px] bg-white w-full h-[300px]">
                <img
                    className="w-[200px] rounded-[50%]"
                    src={userProfile}
                    alt=""
                />
                <div className="text-[16px] leading-tight text-center">
                    <h4 className="text-[30px] capitalize font-[500]">
                        arnob pandit
                    </h4>
                    <h6 className=" text-[#85939c]">arnobpandit34@gmail.com</h6>
                </div>
            </div>
            {/* about box */}
            <div className=" flex flex-col justify-evenly mb-[10px] items-start p-[30px] bg-white text-black text-[18px] w-full h-[80px]">
                <h3 className=" text-[#85939c]">about</h3>
                <h3 className="">i am a web developer 👩‍💻👨‍💻🖥💻</h3>
            </div>
            <div className="w-full h-[150px] text-[18px] text-black flex justify-center items-start flex-col bg-white">
                <div className="flex items-center m-1 bg-white pl-6 hover:bg-[#F0F2F5] text-red-600 w-[95%] py-[6px]">
                    <MdBlock />
                    <p className="pl-[12px] pr-1">block</p>
                    <span>arnob pandit</span>
                </div>
                <div className="flex items-center m-1 bg-white pl-6 hover:bg-[#F0F2F5] text-red-600 w-[95%] py-[6px]">
                    <MdReportProblem />
                    <p className="pl-[12px] pr-1">block</p>
                    <span>arnob pandit</span>
                </div>
                <div className="flex items-center m-1 bg-white pl-6 hover:bg-[#F0F2F5] text-red-600 w-[95%] py-[6px]">
                    <MdDeleteForever />
                    <p className="pl-[12px]">Chat delete</p>
                </div>
            </div>
        </div>
    );
}

export default Showcontact;

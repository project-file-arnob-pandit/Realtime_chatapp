import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoSearchSharp, IoVideocam } from "react-icons/io5";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

const ChatAreaHeader = () => {
    const { selectedContact } = useContext(userContext);

    const [uploadimges, setUploadImages] = useState(
        "https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&w=600"
    );

    const [isSettingVisible, setIsSettingVisible] = useState(false);

    const handleToggle = () => {
        setIsSettingVisible(!isSettingVisible);
    };

    const handleUploadImg = (e) => {
        const img = e.target.files[0];
        const linkimg = URL.createObjectURL(img);
        if (!img) return;
        setUploadImages(linkimg);
    };

    return (
        <div className="w-full h-[60px] flex justify-between bg-gray-100 p-[6px]">
            <div className="h-full w-[100px] flex items-center justify-center rounded-[50%] overflow-hidden">
                <img
                    className="cursor-pointer"
                    src={selectedContact.userphoto}
                    alt="selected_profile"
                />
            </div>
            <div className="ml-[10px] leading-[22px] w-[calc(100%-70px)] flex flex-col gap-1 text-black">
                <div className="text-[21px] h-[22px] capitalize">
                    {selectedContact.username}
                </div>
                <div className="text-[15px] h-[18px] flex items-center pl-2 text-green-500 leading-[28px] capitalize">
                    online
                </div>
            </div>
            <div className="w-full relative w-[calc(100% - 50px)] flex gap-[40px] items-center justify-end mr-4 text-black ">
                <IoVideocam />
                <IoSearchSharp />
                <div className="hover:bg-[#F0F2F5] cursor-pointer p-2 rounded-full">
                    <HiDotsVertical onClick={handleToggle} />
                </div>
                <div
                    className=" absolute top-12  p-2 z-10 flex  justify-center items-center flex-col bg-white"
                    style={{ display: !isSettingVisible ? "none" : "block" }}
                >
                    <div className=" w-full my-1 font-serif flex items-center px-7 hover:bg-[#F0F2F5]  h-[40px] capitalize cursor-pointer text-[22px]">
                        Contact info
                    </div>
                    <div className=" w-full my-1 font-serif flex items-center px-7 hover:bg-[#F0F2F5]  h-[40px] capitalize cursor-pointer text-[22px]">
                        close chat
                    </div>
                    <div
                        id="bg"
                        className=" relative w-full my-1 font-serif flex items-center px-7 hover:bg-slate-300  h-[40px] capitalize cursor-pointer text-[22px]"
                    >
                        change background
                        <span className="absolute hidden bg-white left-[-120px]">
                            <input
                                className="w-[122px] cursor-pointer"
                                type="file"
                                onChange={handleUploadImg}
                            />
                        </span>
                    </div>
                    <div className=" w-full my-1 font-serif flex items-center px-7 hover:bg-[#F0F2F5]  h-[40px] capitalize cursor-pointer text-[22px]">
                        block
                    </div>
                    <div className=" w-full my-1 font-serif flex items-center px-7 hover:bg-[#F0F2F5]  h-[40px] capitalize cursor-pointer text-[22px]">
                        report
                    </div>
                    <div className=" w-full my-1 font-serif flex items-center px-7 hover:bg-[#F0F2F5]  h-[40px] capitalize cursor-pointer text-[22px]">
                        delete
                    </div>
                    <div className=" w-full my-1 font-serif flex items-center px-7 hover:bg-[#F0F2F5]  h-[40px] capitalize cursor-pointer text-[22px]">
                        all clear chat
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatAreaHeader;

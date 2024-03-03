import { MdGroups } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Contact from "./components/Contact";
import Search from "./components/Search";
import { IoVideocam, IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { MdInsertEmoticon } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import User from "./components/User";
import Other from "./components/Other";
import Usershare from "./components/Usershare";
import Othershare from "./components/Othershare";
import Showcontact from "./components/Showcontact";
import ChatConatacts from "./components/ChatConatacts";
import { useEffect, useRef, useState } from "react";
import "./index.css";
import Showprofile from "./components/Showprofile";

import { useContext } from "react";
import { userContext } from "./context/UserContext";

function App(props) {
    const { userProfile } = useContext(userContext);

    const [uploadimges, setUploadImages] = useState(
        "https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&w=600"
    );
    const [showcontactopt, setshowcontactopt] = useState(false);
    const [profileModalVisible, setProfileModalVisibl] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [showprofile, setshowprofile] = useState(false);
    const divRef = useRef(null);
    const handleUploadImg = (e) => {
        const img = e.target.files[0];
        const linkimg = URL.createObjectURL(img);
        if (!img) return;
        setUploadImages(linkimg);
    };
    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        if (!divRef.current) return;
        divRef.current.scrollTo(0, divRef.current.scrollHeight);
    });
    return (
        <div className="  w-full bg-gray-200 px-[10px] gap-1 text-white text-[30px] flex justify-center items-center">
            {/*left page */}

            <div className="relative bg-yellow-400 w-[30%] h-screen flex flex-col">
                {showprofile && <Showprofile showprofile={setshowprofile} />}
                {/* top bar */}
                <div className="w-full h-[70px] bg-[#F0F2F5] flex justify-between items-center text-black flex-row p-2">
                    <div className="h-[100%] w-[50px] cursor-pointer flex overflow-hidden rounded-[50%]">
                        <img
                            src={userProfile}
                            onClick={() => {
                                setshowprofile(true);
                            }}
                            alt="profile"
                        />
                    </div>
                    {/* icon */}
                    <div className="w-full flex h-full justify-end items-center gap-5 mr-2">
                        <MdGroups />
                        <RiChatNewFill />
                        <HiOutlineStatusOnline />
                        <HiDotsVertical />
                    </div>
                </div>
                {/* scarch bar */}
                <div className="w-full h-[60px] bg-[#EFEAE2] flex flex-row ">
                    {/* seacrch bar design */}
                    <Search />
                </div>
                {/* chat contacts */}
                <ChatConatacts />
            </div>
            {/* right page */}
            <div
                id="right"
                className="rightpage bg--100 relative w-[65%] h-screen"
            >
                {/* top bar */}

                <div className="w-full h-[60px] flex justify-between bg-gray-100 p-[6px]">
                    <div className="h-full w-[100px] flex items-center justify-center rounded-[50%] overflow-hidden">
                        <img
                            className="cursor-pointer"
                            src={userProfile}
                            alt=""
                            onClick={() => {
                                setProfileModalVisibl(true);
                            }}
                        />
                    </div>
                    <div className="ml-[10px] leading-[22px] w-[calc(100%-70px)] flex flex-col gap-1 text-black">
                        <div className="text-[21px] h-[22px] capitalize">
                            arnob das
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
                            style={{ display: isVisible ? "none" : "block" }}
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
                {/* chat page */}
                <div
                    className={`overflow-auto w-full h-[82%] pt-[30px] pr-6 bg-cover bg-center bg--400  bg-no-repeat`}
                    style={{ backgroundImage: `url(${uploadimges})` }}
                    ref={divRef}
                >
                    <User usersms="hi" time="8:01 AM" />
                    <Other othersms="hallo" time="8:02 AM" />
                    <Usershare
                        usershare="/public/images/theme.jpg"
                        time="8:06 AM"
                    />
                    <Usershare
                        usershare="/public/images/koustov.jpg"
                        time="8:06 AM"
                    />
                    <Other othersms="good 👍" time="4:50 PM" />
                    <Othershare
                        othershare="/public/images/theme.jpg"
                        time="7:39 PM"
                    />
                    <Othershare
                        othershare="/public/images/theme.jpg"
                        time="7:39 PM"
                    />
                    <User usersms="hallo" time="03:21 PM" />
                    <Other othersms="ha bolo" time="03:21 PM" />
                </div>
                {/* bottom bar */}
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
            </div>
            {/* contact show */}
            {profileModalVisible && (
                <Showcontact closeContact={setProfileModalVisibl} />
            )}
        </div>
    );
}
export default App;

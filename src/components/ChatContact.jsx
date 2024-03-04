import { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import { MdGroups } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { HiDotsVertical, HiOutlineStatusOnline } from "react-icons/hi";
import Search from "./Search";
import ChatConatacts from "./ChatConatacts";
import Showprofile from "./Showprofile";

const ChatContact = () => {
    const { userProfile } = useContext(userContext);
    const [showprofile, setshowprofile] = useState(false);

    return (
        <div className="relative bg-yellow-400 w-[30%] h-screen flex flex-col">
            {showprofile && <Showprofile showprofile={setshowprofile} />}
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
                <div className="w-full flex h-full justify-end items-center gap-5 mr-2">
                    <MdGroups />
                    <RiChatNewFill />
                    <HiOutlineStatusOnline />
                    <HiDotsVertical />
                </div>
            </div>
            <div className="w-full h-[60px] bg-[#EFEAE2] flex flex-row ">
                <Search />
            </div>
            <ChatConatacts />
            {showprofile && <Showprofile showprofile={setshowprofile} />}
        </div>
    );
};

export default ChatContact;

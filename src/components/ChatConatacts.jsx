import React from "react";
import Contact from "./Contact";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

const demoData = [
    {
        username: "arnab pandit",
        userphoto:
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        massages: [
            {
                message: "hi",
                time: "8:01 AM",
            },
            {
                message: "Hello",
                time: "8:01 AM",
            },
            {
                message: "i am arnob",
                time: "8:01 AM",
            },
        ],
        time: "10:45 AM",
        notification: "2",
    },
    {
        username: "Prity college",
        userphoto:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        massages: [
            {
                message: "hi",
                time: "8:01 AM",
            },
            {
                message: "Hello",
                time: "8:01 AM",
            },
            {
                message: "i am arnob",
                time: "8:01 AM",
            },
        ],
        time: "10:05 AM",
        notification: "3",
    },
    {
        username: "arpan das",
        userphoto:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        massages: [
            {
                message: "hi",
                time: "8:01 AM",
            },
            {
                message: "Hello",
                time: "8:01 AM",
            },
            {
                message: "i am arnob",
                time: "8:01 AM",
            },
        ],
        time: "08:45 AM",
        notification: "1",
    },
    {
        username: "avijit dolui",
        userphoto:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        massages: [
            {
                message: "hi",
                time: "8:01 AM",
            },
            {
                message: "Hello",
                time: "8:01 AM",
            },
            {
                message: "i am arnob",
                time: "8:01 AM",
            },
        ],
        time: "10:05 AM",
        notification: "3",
    },
];

const ChatConatacts = () => {
    const { setSelectedContact } = useContext(userContext);

    return (
        <div className="w-[] h-[100%] bg-[#EFEAE2] flex items-center text-black  overflow-hidden flex-col">
            <div className="overflow-auto w-[100%] bg--500 text-[18px] h-full overflow-x-hidden ">
                {demoData.map((contact, index) => {
                    return (
                        <Contact
                            key={index}
                            data={contact}
                            handleClick={setSelectedContact}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ChatConatacts;

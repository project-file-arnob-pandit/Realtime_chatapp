import React, { useContext } from "react";
import ChatAreaHeader from "./ChatAreaHeader";
import MessageInputArea from "./MessageInputArea";
import MessageArea from "./MessageArea";
import { userContext } from "../context/UserContext";

const ChatArea = () => {
    const { selectedContact } = useContext(userContext);

    if (!selectedContact) {
        return (
            <h1
                id="right"
                className="rightpage bg--100 relative w-full text-center text-black"
            >
                Click any Contact to see
            </h1>
        );
    }

    return (
        <div id="right" className="rightpage bg--100 relative w-[65%] h-screen">
            <ChatAreaHeader />
            <MessageArea />
            <MessageInputArea />
        </div>
    );
};

export default ChatArea;

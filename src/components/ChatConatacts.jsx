import React from 'react';
import Contact from './Contact';

const demoData = [
    {
        username: "arnab pandit",
        userphoto: "/public/images/P.jpg",
        massage: "hm",
        time: "10:45 AM",
        notification: "2",
    },
    {
        username: "avijit dolui",
        userphoto: "/public/images/P.jpg",
        massage: "kire ",
        time: "10:05 AM",
        notification: "3",
    },
    {
        username: "arpan das",
        userphoto: "/public/images/P.jpg",
        massage: "good morning",
        time: "08:45 AM",
        notification: "1",
    },
    {
        username: "avijit dolui",
        userphoto: "/public/images/P.jpg",
        massage: "kire ",
        time: "10:05 AM",
        notification: "3",
    },
    {
        username: "arpan das",
        userphoto: "/public/images/P.jpg",
        massage: "good morning",
        time: "08:45 AM",
        notification: "1",
    }
    ,
    {
        username: "avijit dolui",
        userphoto: "/public/images/P.jpg",
        massage: "kire ",
        time: "10:05 AM",
        notification: "3",
    },
    {
        username: "arpan das",
        userphoto: "/public/images/P.jpg",
        massage: "good morning",
        time: "08:45 AM",
        notification: "1",
    }
    ,
    {
        username: "avijit dolui",
        userphoto: "/public/images/P.jpg",
        massage: "kire ",
        time: "10:05 AM",
        notification: "3",
    },
    {
        username: "arpan das",
        userphoto: "/public/images/P.jpg",
        massage: "good morning",
        time: "08:45 AM",
        notification: "1",
    }
    ,
    {
        username: "avijit dolui",
        userphoto: "/public/images/P.jpg",
        massage: "kire ",
        time: "10:05 AM",
        notification: "3",
    },
    {
        username: "arpan das",
        userphoto: "/public/images/P.jpg",
        massage: "good morning",
        time: "08:45 AM",
        notification: "1",
    }
]
const ChatConatacts = () => {
    return (
        <div className="w-[] h-[100%] bg-[#EFEAE2] flex items-center text-black  overflow-hidden flex-col">
            {/* contacts lists */}
            <div className="overflow-auto w-[100%] bg--500 text-[18px] h-full overflow-x-hidden ">
                {
                    demoData.map((contact, index)=>{
                        return  <Contact key={index} username={contact.username} userphoto={contact.userphoto} massage={contact.massage} time={contact.time} notification={contact.notification} />;
                    })
                }
            </div>

        </div>
    )
}

export default ChatConatacts

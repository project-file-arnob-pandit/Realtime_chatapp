import React, { useEffect, useRef, useState } from "react";
import User from "./User";
import Other from "./Other";
import Usershare from "./Usershare";
import Othershare from "./Othershare";

const MessageArea = () => {
    const divRef = useRef(null);

    const [uploadimges, setUploadImages] = useState(
        "https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&w=600"
    );

    useEffect(() => {
        if (!divRef.current) return;
        divRef.current.scrollTo(0, divRef.current.scrollHeight);
    });

    return (
        <div
            className={`overflow-auto w-full h-[82%] pt-[30px] pr-6 bg-cover bg-center bg--400  bg-no-repeat`}
            style={{ backgroundImage: `url(${uploadimges})` }}
            ref={divRef}
        >
            <User usersms="hi" time="8:01 AM" />
            <Other othersms="hallo" time="8:02 AM" />
            <Usershare usershare="/images/theme.jpg" time="8:06 AM" />
            <Usershare usershare="/images/koustov.jpg" time="8:06 AM" />
            <Other othersms="good 👍" time="4:50 PM" />
            <Othershare othershare="/images/theme.jpg" time="7:39 PM" />
            <Othershare othershare="/images/theme.jpg" time="7:39 PM" />
            <User usersms="hallo" time="03:21 PM" />
            <Other othersms="ha bolo" time="03:21 PM" />
        </div>
    );
};

export default MessageArea;

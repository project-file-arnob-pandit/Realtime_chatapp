import React from "react";

const Contact = (props) => {
    const { handleClick, data } = props;
    return (
        <div
            className=" w-[28.9vw] h-[60px] flex scroll-smooth m-1 justify-between cursor-pointer bg-white hover:bg-[#F0F2F5] text-black"
            onClick={() => handleClick(data)}
        >
            <div className="w-full  flex p-[4px]">
                <div className=" w-[54px] rounded-[50%] overflow-hidden bg-cover hover:rounded bg-[url('/public/images/images.png')]">
                    <img className="" src={data.userphoto} />
                </div>
                <div className="ml-[10px] flex flex-col leading-[25px] w-[calc(100%-70px)] text-black ">
                    <div className="text-[1.3vw] h-[30px] flex w-[18.1vw] bg--400 capitalize">
                        {data.username}
                    </div>
                    <div className="text-[1vw] h-[30px] flex w-[18.1vw] bg--500 truncate overflow-hidden text-green-500  ">
                        hello
                    </div>
                </div>
            </div>
            <div className=" text-[0.9vw] h-full flex justify-evenly mr-1 items-center flex-col bg--500 text-black">
                <span className="w-[4.3vw]">{data.time}</span>
                <span className="w-[1.4vw] h-[20px] active:invisible bg-green-400 rounded-[50%] flex justify-center  text-white">
                    {data.notification}
                </span>
            </div>
        </div>
    );
};

export default Contact;

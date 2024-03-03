import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

function Showprofile({ showprofile }) {
    const [optvisible, setoptvisible] = useState(true);
    const [isNameDisabled, setIsNameDisabled] = useState(true);
    const [name, setName] = useState("arnob pandit");
    const [isAboutDisabled, setIsAboutDisabled] = useState(true);
    const [about, setAbout] = useState("Your about text goes here");
    const [coverimg,setcover]= useState("public/images/bg 6.webp");
    const [profileimg,setProfileimg]= useState("public/images/P.jpg");
    const handleToggleOpt = () => {
        setoptvisible(!optvisible);
    };
    const handleCoverImg = (e) => {
        const cover = e.target.files[0];
        const coverimg = URL.createObjectURL(cover);
        if (!cover) return;
        setcover(coverimg);
      };
    const handleProfileImg = (e) => {
        const profileimg = e.target.files[0];
        const profilephoto = URL.createObjectURL(profileimg);
        if (!profileimg) return;
        setProfileimg(profilephoto);
      };
    const toggleNameDisable = () => {
        setIsNameDisabled(!isNameDisabled);
    };

    const toggleAboutDisable = () => {
        setIsAboutDisabled(!isAboutDisabled);
    };

    return (
        <>
            <div className=" absolute *:text-[20px] *:flex *:justify-start *:items-center aprofile-show w-[29.2vw] z-20 h-screen bg-white">
                <div className="top-bar w-full h-[4.3vw] bg-green-500">
                    <span className='ml-[2.9vw] text-[1.3vw]  cursor-pointer'><FaArrowLeft onClick={() => { showprofile(false) }} /></span>
                    <p className='ml-[1.1vw] text-[1.8vw] font-serif capitalize'>profile</p>
                </div>
                <div className=" relative flex text-black bg-pink-400 w-[29.2vw] border rounded shadow-lg h-[18.2vw]">
                    <div className="absolute w-[27.7vw] ml-[0.7vw] mt-[0.5vw] h-[13.9vw] top-0 bg--600 rounded-[10px] overflow-hidden shadow-md shadow-black">
                        <img className='imgset w-[27.7vw] h-[auto]  bg-center bg-cover rounded-[10px]' src={coverimg} alt="" />
                    </div>
                    <img className=" absolute w-[14.6vw] h-[14vw] left-0 bottom-[-1.4vw] cursor-pointer p-[0.5vw]
                     bg-white scale-[0.7] shadow-md shadow-black rounded-[50%]" onClick={handleToggleOpt} src={profileimg} alt="" />
                    <p className='absolute bottom-[0.7vw] uppercase font-serif text-[1.4vw] right-[4.3vw]'>arnob pandit</p>
                    <div className="absolute flex h-[3.6vw] p-[0.5vw] bottom-[-3.6vw] z-20 right-0  bg-blue-500 justify-center items-center flex-col" style={{ display: optvisible ? 'none' : 'block' }}>
                        <span className=' m-[0.2vw] text-[1vw] p-[0.5vw] cursor-pointer bg-yellow-400'><input className='absolute cursor-pointer w-[6.5vw] opacity-[0.01]' type="file" onChange={handleProfileImg} />Upload Photo</span>
                        <span className=' m-[0.2vw] text-[1vw] p-[0.5vw] cursor-pointer bg-yellow-400'><input className='absolute cursor-pointer w-[6.5vw] opacity-[0.01]' type="file" onChange={handleCoverImg}/>Upload Cover</span>
                        <span className=' m-[0.2vw] text-[1vw] p-[0.5vw] cursor-pointer bg-yellow-400' onClick={setProfileimg}>Remove Photo</span>
                    </div>
                </div>
                <div className="relative name w-[29vw] bg- h-[21.9vw] bg-[] my-[0.8vw] text-black ">
                    <div className="relative name w-[29vw] h-[21.9vw] bg-[]  text-black ">
                        <div className="p-[1.1vw] font-serif text-[1vw] my-[0.8vw] top-0 w-full h-[5.8vw]">
                            <label className='text-[1.3vw]' htmlFor="">Your Name</label>
                            <div className="flex w-[25.4vw] bg- ml-[1.3vw]">
                                <input
                                    className={`outline-none w-[90%] border-b-2 ${isNameDisabled ? 'border-none' : 'border-gray-800'}`}
                                    type="text"
                                    value={name}
                                    disabled={isNameDisabled}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div className="cursor-pointer text-[1.3vw]" onClick={toggleNameDisable}>
                                    <MdModeEdit />
                                </div>
                            </div>
                        </div>
                        <div className="p-[1.1vw] font-serif text-[1vw] my-[0.8vw] top-0 w-full h-[5.8vw]">
                            <label className='text-[1.3vw]' htmlFor="">About</label>
                            <div className="flex w-[25.4vw] bg- ml-[1.3vw]">
                                <input
                                    className={`outline-none w-[90%] border-b-2 ${isAboutDisabled ? 'border-none' : 'border-gray-800'}`}
                                    type="text"
                                    value={about}
                                    disabled={isAboutDisabled}
                                    onChange={(e) => setAbout(e.target.value)}
                                />
                                <div className="cursor-pointer text-[1.3vw]" onClick={toggleAboutDisable}>
                                    <MdModeEdit />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showprofile

import React from 'react'
import { MdDownload } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { saveAs } from 'file-saver';
function Othershare(props) {
  const handleDownload = () => {
    saveAs(props.othershare, 'downloaded-image.jpeg');
  };
  return (
    <>
      <div className=" w-ful pl-[3.6vw] flex justify-end bg- pr-[4vw] my-[1.4vw]">
        <div className=" imgshare relative h-[14vw] gap-[0.4vw] flex justify-start p-[0.4vw] bg-white">
          <img className=' bg-center' src={props.othershare} alt="" />
          <div className="text-[0.8vw] px-[0.2vw] rounded flex items-end bottom-[5%] right-[5%] text-white absolute">{props.time}</div>
          <span className=' text-[1.2vw] p-[3px] hidden bg-gray-200 hover:visible text-black rounded-[20px] cursor-pointer absolute top-[7%] right-[6%]' 
          onClick={handleDownload}
          ><MdDownload /></span>
          <span className='text-[1.7vw] absolute p-[2px] cursor-pointer text-black rounded-[20px] bg-gray-200 left-[102%] top-[42%]'><IoMdShareAlt /></span>
        </div>
      </div>
    </>
  )
}

export default Othershare

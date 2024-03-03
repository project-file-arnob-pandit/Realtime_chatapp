
function Contact(props) {
  return (
   <>
    {/* contact design */}
  <div id='' className=" w-[28.9vw] h-[60px] flex scroll-smooth m-1 justify-between cursor-pointer bg-white hover:bg-[#F0F2F5] text-black">
                {/* contact img and name and massage*/}
                <div className="w-full  flex p-[4px]">
                  <div className=" w-[54px] rounded-[50%] overflow-hidden bg-cover hover:rounded bg-[url('/public/images/images.png')]">
                    <img className="" src={props.userphoto} />
                  </div>
                  {/* name and sms */}
                  <div className="ml-[10px] flex flex-col leading-[25px] w-[calc(100%-70px)] text-black ">
                    <div className="text-[1.3vw] h-[30px] flex w-[18.1vw] bg--400 capitalize">{props.username}</div>
                    <div className="text-[1vw] h-[30px] flex w-[18.1vw] bg--500 truncate overflow-hidden text-green-500  ">{props.massage}</div>
                  </div>
                </div>
                {/* time */}
                <div className=" text-[0.9vw] h-full flex justify-evenly mr-1 items-center flex-col bg--500 text-black">
                  <span className='w-[4.3vw]'>{props.time}</span>
                  <span className='w-[1.4vw] h-[20px] active:invisible bg-green-400 rounded-[50%] flex justify-center  text-white'>{props.notification}</span>
                  </div>
              </div>
   </>
  )
}

export default Contact

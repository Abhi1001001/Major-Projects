import { useState } from "react";
import SendIcon from "../Icons/send-icon.svg?react";
export default function ChatPopup(props) {
  const [userSingleChatMassege, setUserSingleChatMassege] = useState();
  const [userChatMassege, setUserChatMassege] = useState([]);

  const sendUserChat = (e) => {
    setUserChatMassege([...userChatMassege, userSingleChatMassege]);
    setUserSingleChatMassege("");
  };
  return (
    <>
      <div className="lg:w-80 w-60 lg:h-96 border border-[#dfc855] fixed bottom-24 sm:right-12 right-8 z-20 rounded-xl bg-white flex flex-col justify-center items-center dark:bg-[#121212] dark:text-white shadow-[0_4px_10px_rgba(0,100,255,0.5)]">
        <div className="flex items-center w-full px-4 py-2">
          <span className="w-full text-xl font-bold">Chat With us</span>
          <span onClick={() => props.close()} className="cursor-pointer">
            X
          </span>
        </div>
        {/* divider section -----------------------------------> */}
        <div className="bg-black lg:h-[1px] w-11/12"></div>
        {/* chat content section ----------------------------> */}
        <div className="w-full h-4/5 px-8 py-5 flex flex-col overflow-y-auto">
          <div className="w-full relative">
            <p className="w-fit border border-[#c9c9c9] rounded-3xl px-5 py-3 text-sm z-0 shadow-2xl">
              Hi there, sorry we're unavailable at the moment. Please leave your
              details and we will get back to you shortly.
            </p>
            <div className="bg-white dark:bg-[#121212] w-4 h-4 border-l border-b border-[#c9c9c9] rotate-45 absolute -left-[7px] bottom-[24px] z-10"></div>
          </div>
          {
            userChatMassege.map((item, index)=>{
              return <div className="w-full">
                <div className="w-fit border border-[#c9c9c9] rounded-2xl px-5 py-3 text-sm z-0 mt-3 relative float-right shadow-2xl">
                {item}
                <div className="bg-white dark:bg-[#121212] w-4 h-4 border-r border-t border-[#c9c9c9] rotate-45 absolute -right-[9px] bottom-[14px] z-10"></div>
                </div>
              </div>
            })
          }
        </div>
        {/* input & send icon section ---------------------> */}
        <div className="flex py-3 px-3 w-full sm:justify-evenly justify-between border-t-2 border-[#e6e6e6]">
          <input
            onChange={(e) => setUserSingleChatMassege(e.target.value)}
            className="sm:w-auto w-36 outline-none rounded-xl border-b-2 border-[#e6e6e6] px-2 dark:bg-[#121212]"
            type="text"
            value={userSingleChatMassege}
            placeholder="Enter something....."
          />
          <SendIcon
            onClick={sendUserChat}
            className="sm:w-14 w-12 bg-blue-600 text-white sm:px-4 px-3 sm:py-1 rounded-full cursor-pointer"
          />
        </div>
      </div>
      <div></div>
    </>
  );
}

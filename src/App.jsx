import Showcontact from "./components/Showcontact";
import { useState } from "react";
import ChatContact from "./components/ChatContact";
import ChatArea from "./components/ChatArea";
import "./index.css";

function App() {
    const [profileModalVisible, setProfileModalVisibl] = useState(false);

    return (
        <div className="w-full bg-gray-200 px-[10px] gap-1 text-white text-[30px] flex justify-center items-center">
            <ChatContact />
            <ChatArea />
            {profileModalVisible && (
                <Showcontact closeContact={setProfileModalVisibl} />
            )}
        </div>
    );
}
export default App;

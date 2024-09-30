import Arrow from "../../../assets/tilted-arrow.svg"
import Library from "../../../assets/library-icon.svg"
import Community from "../../../assets/community-icon.svg"
import Chat from "../../../assets/live-chat-icon.svg"
import Accessment from "../../../assets/self-assessment.svg"


const Support = () => {
  return (
    <div className="border-t-2 border-t-[#B5B5B4]  mt-5 overflow-hidden">
        <div className="container ">
      <div className="bg-offwhite w-full flex-row flex justify-between items-center ">

        <div className="w-[24%] flex-shrink flex-grow border-r-2 border-[#E5E5EA] h-[150px] flex flex-col justify-between p-2 overflow-scroll sm:overflow-hidden">
            <h5 className="text-secondary gap-6 text-sm lg:text-xl">Live Chat with Doctors</h5>
            <div className="flex justify-between items-end">
                <img src={Arrow} alt="arrow" className="w-[25px] lg:w-[50px]"/>
                <img src={Chat} alt="chat"  className="w-[30px] lg:w-[60px]"/>
            </div>
        </div>

        <div className="w-[24%] flex-shrink flex-grow border-r-2 border-[#E5E5EA] h-[150px] flex flex-col justify-between p-2 overflow-scroll sm:overflow-hidden">
            <h5 className="text-secondary gap-6 text-sm lg:text-xl">Library with Downloadable Tools</h5>
            <div className="flex justify-between items-end">
                <img src={Arrow} alt="arrow" className="w-[25px] lg:w-[50px]"/>
                <img src={Library} alt="chat"  className="w-[30px] lg:w-[60px]"/>
            </div>
        </div>

        <div className="w-[24%] flex-shrink flex-grow border-r-2 border-[#E5E5EA] h-[150px] flex flex-col justify-between p-2 overflow-scroll sm:overflow-hidden">
            <h5 className="text-secondary gap-6 text-sm lg:text-xl">Community Forums/Chat Rooms</h5>
            <div className="flex justify-between items-end">
                <img src={Arrow} alt="arrow" className="w-[25px] lg:w-[50px]"/>
                <img src={Community} alt="chat"  className="w-[30px] lg:w-[60px]"/>
            </div>
        </div>

        <div className="w-[24%] flex-shrink flex-grow  h-[150px] flex flex-col justify-between p-2 overflow-scroll sm:overflow-hidden">
            <h5 className="text-secondary gap-6 text-sm lg:text-xl">Self-assessment Tools</h5>
            <div className="flex justify-between items-end">
                <img src={Arrow} alt="arrow" className="w-[25px] lg:w-[50px]"/>
                <img src={Accessment} alt="chat"  className="w-[30px] lg:w-[60px]"/>
            </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Support

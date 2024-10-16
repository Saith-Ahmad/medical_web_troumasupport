
export default function SidebarChatroom() {
  return (
    <div className="min-w-[300px] max-w-[380px]">
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-center items-center gap-4">
          <p>Period</p>
          <select className="flex-1 md:mr-2 mb-2 md:mb-0 p-1 border  rounded-md min-h-[60px] outline-1 outline-black focus:outline-none focus:border-none  ">
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
            <option value="location4">Location 4</option>
          </select>
        </div>
      </div>
    </div>
  )
}

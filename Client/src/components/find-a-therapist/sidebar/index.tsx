import { SearchIcon } from "lucide-react"
import DistanceMeasurment from "./distance-measurment"

function Sidebar() {
  return (
    <div className="bg-offwhite w-full min-h-[1000px] p-5  flex flex-col justify-start items-start rounded-lg gap-y-3 shadow-xl">
      <div><h4 className="heading-5">Refine <span className="text-primary">Your Search</span></h4></div>

      <form className="flex flex-col justify-start items-start rounded-md">
      <label htmlFor="location" className="ms-1 text-gray-700">Location</label>
      <div className="relative w-full"> 
        <input type="text" id="location" placeholder="Enter your location" className="w-full   pr-10 py-4   rounded-md  px-4 focus:outline-none focus:outline-primary focus:outline-2"
        />
        <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div>
        <DistanceMeasurment/>
      </div>
    </form>

    </div>
  )
}

export default Sidebar
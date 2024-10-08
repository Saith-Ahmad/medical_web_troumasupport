import { SearchIcon } from "lucide-react"
import DistanceMeasurment from "./distance-measurment"
import PriceCount from "../price-count"

function Sidebar() {
  return (
    <div className="bg-offwhite w-full min-h-[1000px] p-5  flex flex-col justify-start items-start rounded-lg gap-y-3 shadow-xl mb-10">
      <div><h4 className="heading-5 font-bold">Refine <span className="text-primary">Your Search</span></h4></div>

      <form className="flex flex-col justify-start items-start rounded-md gap-y-5">
        <label htmlFor="location" className="ms-1 text-gray-700">Location</label>
        <div className="relative w-full">
          <input type="text" id="location" placeholder="Enter your location" className="w-full   pr-10 py-4   rounded-md  px-4 focus:outline-none focus:outline-primary focus:outline-2"
          />
          <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <div>
          <DistanceMeasurment />
        </div>

        <div className="border-t-2 border-t-gray-200 min-h-[120px] pt-5">
          <label htmlFor="Worrying">Whats Worrying You</label>
          <select className="mt-2 w-full flex-1 md:mr-2 mb-2 md:mb-0 p-2  rounded-md min-h-[60px]  focus:outline-none focus:border-none ">
            <option value="" disabled selected>Any</option>
            <option value="therapist1">Option 1</option>
            <option value="therapist2">Option 2</option>
          </select>
        </div>

        <div className="border-t-2 border-t-gray-200 min-h-[120px] pt-5">
          <label htmlFor="Therapy Type">Type of Therapy</label>
          <select className="mt-2 w-full flex-1 md:mr-2 mb-2 md:mb-0 p-2  rounded-md min-h-[60px]  focus:outline-none focus:border-none ">
            <option value="" disabled selected>Any</option>
            <option value="therapist1">Option 1</option>
            <option value="therapist2">Option 2</option>
          </select>
        </div>


        <div className=" pt-5 para-medium border-t-2 border-t-gray-200 w-full ">
          <label>Type of Therapy</label>
          <div className="flex flex-col space-y-2 mt-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">In Person</span>
            </label>

            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">Online</span>
            </label>

            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">Home Visit</span>
            </label>
          </div>
        </div>

        <div className=" pt-5 para-medium border-t-2 border-t-gray-200 w-full ">
          <label>Type of practitioner</label>
          <div className="flex flex-col space-y-2 mt-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">Individual</span>
            </label>

            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">Organization</span>
            </label>
          </div>
        </div>

        <div className=" pt-5 para-medium border-t-2 border-t-gray-200 w-full ">
          <label>Accessibility</label>
          <div className="flex flex-col space-y-2 mt-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">Wheelchair-user access</span>
            </label>

            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">Hearing induction loop</span>
            </label>
          </div>
        </div>

        <div className=" pt-5 para-medium border-t-2 border-t-gray-200 w-full ">
          <label>Session availability</label>
          <div className="flex flex-col space-y-2 mt-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">Weekday daytime</span>
            </label>

            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">Weekday evening</span>
            </label>

            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-black accent-black" />
              <span className="ml-2">Weekends</span>
            </label>
          </div>
        </div>

        <div>
          <PriceCount/>
        </div>


      </form>

    </div>
  )
}

export default Sidebar
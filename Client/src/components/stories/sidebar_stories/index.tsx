import { Search } from "lucide-react"

function Sidebar_Stories() {
  return (
    <div className="min-w-[300px] bg-offwhite px-5 lg:min-h-[1000px] mb-10 rounded-lg py-10">
        <h5 className="heading-5">Refine Your <span className="text-primary">Search</span></h5>
        <div className="py-10 flex flex-col">
            <div className="flex justify-start items-center bg-white px-3 rounded-lg">
                <input type="text" placeholder="Search by category" className="w-full py-3 px-2 border font-light rounded-lg  border-none outline-none placeholder-gray-950"/>
                <Search strokeWidth={2}/>
            </div>
            <div className="h-[30px] border-b-2 border-gray-200 my-5"></div>

            <div className="flex justify-start items-center bg-white px-3 rounded-lg mt-5">
                <input type="text" placeholder="Search by date" className="w-full py-3 px-2 border font-light rounded-lg  border-none outline-none placeholder-gray-950"/>
                <Search strokeWidth={2}/>
            </div>
            <div className="h-[30px] border-b-2 border-gray-200 my-5"></div>

            <div className="flex justify-start items-center bg-white px-3 rounded-lg mt-5">
                <input type="text" placeholder="Search by therapist" className="w-full py-3 px-2 border font-light rounded-lg  border-none outline-none placeholder-gray-950"/>
                <Search strokeWidth={2}/>
            </div>

        </div>
    </div>
  )
}

export default Sidebar_Stories
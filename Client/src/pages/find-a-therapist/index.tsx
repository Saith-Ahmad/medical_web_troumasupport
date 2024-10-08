import Hero from "@/components/understanding-trouma/hero";
import FindTherapist from "../../assets/find-a-therapist-banner.png";
import TherapistSearch from "@/components/find-a-therapist/therapist-serach";
import Sidebar from "@/components/find-a-therapist/sidebar";
import { CircleX, FilterIcon } from "lucide-react";
import { useState } from "react";
import TherapistList from "@/components/find-a-therapist/therapist-List";

function FindATherapist() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Hero image={FindTherapist} info={"Connect with a trauma-informed therapist to receive compassionate support and guidance on your path to healing."}/>
      <TherapistSearch />



      <div className="flex flex-col md:flex-row justify-between container relative mt-10 gap-6">
        <div className="w-[25%] hidden md:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden w-full px-5">
          <button className="w-full bg-primary py-3 text-white flex justify-center items-center gap-3 rounded-lg transform transition-transform duration-300 hover:scale-95"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            Apply Filters
            {!isSidebarOpen? 
            <FilterIcon
            className="text-white cursor-pointer"
          />:
          <CircleX className="text-white cursor-pointer"/>  
          }
          </button>
          <div
            className={`absolute top-14 left-0 w-[80%] z-[100]  transition-transform duration-300 ${
              isSidebarOpen ? "transform translate-x-5" : "transform -translate-x-full"
            }`}
          >
            <Sidebar />
          </div>
        </div>


        <div className="md:w-[74%] w-full">
          <TherapistList/>
        </div>
      </div>
    </>
  );
}

export default FindATherapist;

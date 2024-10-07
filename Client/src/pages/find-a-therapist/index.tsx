import Hero from "@/components/understanding-trouma/hero";
import FindTherapist from "../../assets/find-a-therapist-banner.png";
import TherapistSearch from "@/components/find-a-therapist/therapist-serach";
import Sidebar from "@/components/find-a-therapist/sidebar";
import { FilterIcon } from "lucide-react";
import { useState } from "react";
import TherapistList from "@/components/find-a-therapist/therapist-List";

function FindATherapist() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Hero image={FindTherapist} info={"Connect with a trauma-informed therapist to receive compassionate support and guidance on your path to healing."}/>
      <TherapistSearch />



      <div className="flex flex-col md:flex-row justify-between container relative mt-10">
        <div className="w-[25%] hidden md:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden w-full ">
          <div className="bg-pink-800 h-[50px] flex justify-center items-center border-2 border-white">
            <FilterIcon
              className="text-white cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          </div>
          <div
            className={`absolute top-14 left-0 w-[75%] h-full bg-white transition-transform duration-300 ${
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

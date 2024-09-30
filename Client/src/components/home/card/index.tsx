
import Consultation from "../../../assets/consultation.png";
import Profile from "../../../assets/profile.png";
import { Mail } from "lucide-react";

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col rounded-lg overflow-hidden bg-offwhite shadow-lg">
        <div className="relative">
          <img src={Consultation} alt="Consultation" className="w-full h-48 object-cover" />
          <div className="bg-white w-[280px] absolute bottom-2 left-2 rounded-lg px-3 py-2 flex flex-row justify-between font-semibold">
            <p className="font-semibold">April</p>
            <div className="flex flex-row justify-center items-center gap-1">
              <Mail size={20} color="grey" strokeWidth={1} />
              <p className="text-primary">Self-Assessment Tools</p>
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-3">
          <div className="flex flex-col gap-2 justify-start">
            <h5 className="font-semibold text-lg md:text-xl">
              Understanding Trauma: Types, Symptoms, and Pathways  to Healing
            </h5>
            <p className="text-[13px] font-light">
              Explore trauma types, identify symptoms, and find effective pathways to healing.
            </p>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-3 justify-center items-center">
              <img src={Profile} alt="Profile" className="rounded-full w-[35px]" />
              <p>Kristen Morgan</p>
            </div>
            <p className="text-[12px] font-light">17 hours Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

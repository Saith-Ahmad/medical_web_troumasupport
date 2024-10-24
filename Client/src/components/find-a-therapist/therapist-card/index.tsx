import { MapPin } from "lucide-react";
import addToFavourite from "../../../assets/add-to-favourite.svg";
import { motion } from "framer-motion";

interface CardProps {
  image: string;
  name: string;
}

function TherapistCard({ image = "", name = "Dr. Sahb" }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.25 }}
      viewport={{ once: true }}
      className="w-full bg-offwhite flex flex-col md:flex-row justify-center items-center px-1 py-3 rounded-lg shadow-lg mb-10"
    >
      <div className="flex flex-col items-center justify-center w-full md:w-[30%]">
        <img
          src={image}
          alt="Doctor"
          className="w-[250px] rounded-full border-[10px] border-white"
        />
        <div className="flex justify-start items-center gap-1">
          <MapPin className="text-secondary" strokeWidth={3} size={17} />
          <p className="text-gray-500 para-medium font-semibold">
            Manchester M32 & M21
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full md:w-[65%] p-3 gap-2">
        <div className="flex gap-4">
          <h5 className="text-2xl font-semibold">{name}</h5>
          <button className="bg-green-700 rounded-3xl px-3 text-white">
            Available
          </button>
        </div>
        <p className="para-small mb-4 text-gray-800">
          Psychoanalytic Psychotherapist, PhD from the University of Manchester
          (Research area: OCD)
        </p>
        <p className="para-medium">
          Dr. Doe is a highly experienced clinical psychologist specializing in
          trauma recovery and emotional well-being. With over 15 years of
          experience
        </p>

        <div className="flex gap-3 justify-start items-center mt-10">
          <button className="hvr-scl-primary bg-primary px-4 py-2 text-white rounded-md">
            View Profile
          </button>
          <button className="hvr-scl-secondary bg-secondary px-4 py-2 text-white rounded-md">
            Email me
          </button>
          <img src={addToFavourite} alt="add to favourite" className="hover:scale-105"/>
        </div>
      </div>
    </motion.div>
  );
}

export default TherapistCard;

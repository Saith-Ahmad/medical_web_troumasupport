import { MapPin } from "lucide-react";
import addToFavourite from "../../../assets/add-to-favourite.svg"
import Dr1 from "../../../assets/dr.1.png"
import { motion } from "framer-motion";



function TherapistDetailsSection() {
    return (
        <motion.div
        initial={{ opacity: 0, x: 75 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, delay: 0.25 }}
             viewport={{ once: true }}
        className=" w-full flex flex-col gap-2 justify-center items-center px-1 py-3 rounded-lg mt-10">

            <div className="flex flex-col items-center justify-center w-full ">
                <img
                    src={Dr1}
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

            <div className="flex flex-col justify-center w-full items-center gap-2">
                <div className="flex gap-4">
                    <h5 className="text-2xl font-semibold">Dr Jane Doe</h5>
                    <button className="bg-green-700 rounded-3xl px-3 text-white">Available</button>
                </div>
                <p className="para-medium mb-4 text-gray-800">Psychoanalytic Psychotherapist, PhD from the University of Manchester (Research area: OCD)</p>

                <div className="flex gap-2 justify-start items-center">
                    <button className="hvr-scl-primary bg-primary px-4 py-2 text-white rounded-md">View Profile</button>
                    <button className="hvr-scl-secondary bg-secondary px-4 py-2 text-white rounded-md">Email me</button>
                    <img src={addToFavourite} alt="add to favourite" />
                </div>
            </div>
        </motion.div>
    );
}

export default TherapistDetailsSection;

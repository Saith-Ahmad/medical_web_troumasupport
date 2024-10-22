import { Search } from "lucide-react";
import { motion } from "framer-motion";

function TherapistSearch() {
  return (
    <div className="container px-5 my-5">
      <motion.h3
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        viewport={{ once: true }}
        className="heading-4 text-center lg:text-start mb-2"
      >
        Find a Therapist in <span className="text-primary">Your City</span>
      </motion.h3>

      <div className="min-h-[100px] bg-white shadow-lg py-3 flex flex-col justify-center p-5 rounded-xl">
        <form className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <input
            className="md:min-w-[450px] p-3 pr-10 border rounded-lg font-normal min-h-[60px] bg-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-900"
            placeholder="Search by Therapist Name"
          />

          {/* Therapist Select */}
          <motion.select
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex-1 md:mr-2 font-light md:min-w-[450px] mb-2 md:mb-0 p-2 border border-gray-300 rounded-md min-h-[60px] focus:outline-none focus:border-none focus:ring-[2px] focus:ring-primary"
          >
            <option value="" disabled>
              Select Therapist
            </option>
            <option value="therapist1">Therapist 1</option>
            <option value="therapist2">Therapist 2</option>
            <option value="therapist3">Therapist 3</option>
            <option value="therapist4">Therapist 4</option>
          </motion.select>

          {/* Location Select */}
          <select className="flex-1 md:mr-2 mb-2 md:mb-0 p-2 border border-gray-300 rounded-md min-h-[60px] focus:border-primary focus:outline-none focus:border-none focus:ring focus:ring-primary appearance-none">
            <option value="" disabled>
              Select Location
            </option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
            <option value="location4">Location 4</option>
          </select>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.9, delay: 0.25 }}
            viewport={{ once: true }}
            type="submit"
            className="flex text-xl items-center justify-center px-4 py-2 text-white bg-primary min-h-[60px] font-semibold rounded-lg hover:bg-primary-dark gap-2 hvr-scl-primary"
          >
            Get Help
            <Search className="ml-2" />
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default TherapistSearch;

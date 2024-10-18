import { Search } from "lucide-react";
import { motion } from "framer-motion";
const CallToAction = () => {
  return (
    <div className=' my-16 container px-4'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className="heading-2 text-center">
          Existence can be challenging
        </h2>
        <p className="para-large font-light mt-2 text-center">
          Connecting with someone who can provide support shouldn't be a challenge.
        </p>

        <motion.div
         initial={{ opacity: 0, y: 75 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.25 }}
         viewport={{ once: true }}
        className="mt-8 w-full max-w-3xl">
         <div className="p-4 bg-white rounded-lg shadow-md">
         <form className="flex flex-col gap-3 lg:flex-row justify-between items-center space-x-2">
            <div className="flex-grow relative">
              <select className="w-full p-3 pr-10 border rounded-lg font-light bg-white  focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="" disabled selected>
                  Where Are You Located
                </option>
                <option value="city1">New York</option>
                <option value="city2">Chicago</option>
                <option value="city3">Cario</option>
                <option value="city4">Alaska</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="lg:py-3 py-2 px-5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark flex gap-2 hvr-scl-primary">
              Get Help
                <Search size={22}/>
            </button>
          </form>
         </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;

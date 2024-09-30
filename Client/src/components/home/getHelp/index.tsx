import Filter from "../../../assets/filter-icon.svg";
import { motion } from "framer-motion";

const GetHelp = () => {
  return (
    <div className="container">
      <motion.div
       initial={{ opacity: 0, y: 75 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.25 }}
       viewport={{ once: true }}
      className="mx-auto w-full md:w-[1104px] min-h-[100px] bg-dullwhite p-5 flex flex-col md:flex-row justify-center items-center flex-wrap gap-1">

        <div className="w-full md:w-1/4 bg-white p-2 flex flex-row justify-between items-center border-2 border-[#E5E5EA] rounded-sm">
          <div className="flex flex-col">
            <h5 className="text-base">Specification</h5>
            <p className="text-sm font-light">PTSD, Anxiety, Depression</p>
          </div>
          <span>▼</span>
        </div>

        <div className="w-full md:w-1/4 bg-white p-2 flex flex-row justify-between items-center border-2 border-[#E5E5EA] rounded-sm">
          <div className="flex flex-col">
            <h5 className="text-base">Demographic</h5>
            <p className="text-sm font-light">Gender, Language, Culture</p>
          </div>
          <span>▼</span>
        </div>

        <div className="w-full md:w-1/4 bg-white p-2 flex flex-row justify-between items-center border-2 border-[#E5E5EA] rounded-sm">
          <div className="flex flex-col">
            <h5 className="text-base">Location</h5>
            <p className="text-sm font-light">City, State</p>
          </div>
          <span>▼</span>
        </div>

        <div className="w-full  md:w-[23%] flex flex-row justify-between items-center rounded-sm gap-3">
          <div>
            <img src={Filter} alt="filteration" className="w-[80px]" />
          </div>
          <button 
          className="bg-primary text-lg font-semibold text-white py-3 px-7 rounded-sm hvr-scl-primary w-full ">
            Get Help
          </button>
        </div>
        
      </motion.div>
    </div>
  );
};

export default GetHelp;

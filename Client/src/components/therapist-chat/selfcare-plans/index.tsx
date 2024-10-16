import CatAndBook from "../../../assets/Cat and book 1.png";
import Book from "../../../assets/book.png";
import { motion } from "framer-motion";

function SelfCarePlans() {
  return (
    <div className="container my-10 rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        viewport={{ once: true }}
        className="bg-[#BFAF9C] min-h-[220px] w-full flex flex-col md:flex-row items-center justify-between  gap-y-5 relative"
        style={{
          backgroundImage: `url(${Book})`, 
          backgroundSize: "cover",         
          backgroundPosition: "overlay",    
          backgroundBlendMode: "luminosity",  
        }}
      >
        <div className="p-5 w-full flex flex-col md:flex-row gap-y-5 items-center justify-around">
          <h3 className="text-center md:text-start heading-3">Self-Care Plans</h3>
          <button className="px-12 py-4 bg-white rounded-lg text-primary font-bold transform transition-transform duration-300 hover:scale-105">
            Personalized care templates
          </button>
        </div>
        <img src={CatAndBook} alt="Library" />
      </motion.div>
    </div>
  );
}

export default SelfCarePlans;

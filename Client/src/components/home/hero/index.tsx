import homeBanner from "../../../assets/homepagge-overcome-banner.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="relative flex flex-col items-start justify-center px-7  lg:mt-0 min-h-[300px] lg:min-h-[500px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h1 className="heading-1">
              Overcome Trauma, Find <br /> Peace and Healing.
            </h1>

            <p className="para-large">
              Need medical attention? <br />
              Find the closest hospital or clinic in your area.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="absolute right-0 bottom-0 -z-10"
          >
            <img src={homeBanner} alt="banner" className="w-full" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;

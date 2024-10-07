import { X, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import {} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-offwhite ">
      <div className="container">
        <div className="flex flex-row flex-wrap justify-between items-start font-light py-10 ">
          <motion.div
           initial={{ opacity: 0, y: 75 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.25 }}
           viewport={{ once: true }}
          className="flex flex-col justify-center items-start lg:w-[24%] space-y-4 p-5">
            <h3 className="text-lg lg:text-2xl text-secondary font-bold text-center">
              Trauma Support
            </h3>
            <p className="text-[13px] text-start">
              If you're experiencing emotional distress,{" "}
              <span className="text-secondary">click here</span> to provide free
              and confidential support 24/7. If this is an emergency, call 911.
            </p>
            <motion.div
             initial={{ opacity: 0, x: -75 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.25 }}
             viewport={{ once: true }}
            className="bg-[#484848] rounded-full px-4 py-2 flex gap-3 w-full justify-between max-w-[300px]">
              <X strokeWidth={2} color="white" />
              <Twitter strokeWidth={1} color="white" />
              <Facebook strokeWidth={1} color="white" />
            </motion.div>
          </motion.div>

          <motion.div
           initial={{ opacity: 0, x: 75 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.9, delay: 0.25 }}
           viewport={{ once: true }}
          className="lg:ms-10 flex flex-col justify-center items-start lg:w-[24%] w-1/2 space-y-4 p-5">
            <p className="text-[#484848] font-bold">Get Care</p>
            <ul className="text-[14px] font-light">
              <li>Meical Care</li>
              <li>Emergency Help</li>
              <li>Therapist Near me</li>
              <li>Consultation</li>
            </ul>
          </motion.div>

          <motion.div
           initial={{ opacity: 0, y: -75 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.1, delay: 0.05 }}
           viewport={{ once: true }}
          className="flex flex-col justify-center items-start lg:w-[24%] w-1/2 space-y-4 p-5">
            <p className="text-[#484848] font-bold">Providers </p>
            <ul className="text-[14px] font-light">
              <li>Join as Proffessional</li>
              <li>Learn More</li>
              <li>Project</li>
              <li>Resource centre</li>
            </ul>
          </motion.div>

          <motion.div
           initial={{ opacity: 0, y: 75, x:50 }}
           whileInView={{ opacity: 1, y: 0, x:0 }}
           transition={{ duration: 0.7, delay: 0 }}
           viewport={{ once: true }}
          className="flex flex-col justify-center items-start lg:w-[24%] w-1/2 space-y-4 p-5">
            <p className="text-[#484848] font-bold">Get Care</p>
            <ul className="text-[14px] font-light">
              <li>Trauma Care</li>
              <li>Therapist Search</li>
              <li>Support Network</li>
              <li>Advocacy & Awarness</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
         initial={{ opacity: 0, y: 10 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.25 }}
         viewport={{ once: true }}
        className="border-t-2 border-t-[dullwhite] py-2">
          <p className="text-center font-light text-[14px]">
            Copyright @ 2024 All rights reserved{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;

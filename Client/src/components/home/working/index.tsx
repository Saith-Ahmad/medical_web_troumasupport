import BestPractice from "../../../assets/best-online-professional.png"
import InstantAppointment from "../../../assets/get-instant-appointment.png"
import Feedback from "../../../assets/leave-yourfeedback.png"
import { motion } from "framer-motion";


const HowItWorks = () => {
  return (
    <div className="container">
      <h2 className="heading-2 text-center">How<span className="text-primary"> It Works</span></h2>
      <p className="para-large text-center font-light">Learn more about our works</p>

      <motion.div
       initial={{ opacity: 0, y: -75 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.25 }}
       viewport={{ once: true }}
      className="flex flex-col lg:flex-row justify-between items-center mt-4 space-y-5">

        <div className="flex flex-col w-full lg:w-[32%] justify-center items-center space-y-2">
            <img src={BestPractice} alt="best practice" className="w-[152px]"/>
            <h5 className="heading-5 text-secondary font-semibold">Best Online professional</h5>
            <p className="font-light text-center">Find top online professionals specializing in trauma care, therapy, counselling, mental health</p>
        </div>

        <div className="flex flex-col w-full lg:w-[32%] justify-center items-center space-y-2">
            <img src={InstantAppointment} alt="Instant Appointment" className="w-[152px]"/>
            <h5 className="heading-5 text-secondary font-semibold">Get Instant Appoitment</h5>
            <p className="font-light text-center">Book an appointment with our trauma specialists for immediate support and personalized care.</p>
        </div>

        <div className="flex flex-col w-full lg:w-[32%] justify-center items-center space-y-2">
            <img src={Feedback} alt="Feedback" className="w-[152px]"/>
            <h5 className="heading-5 text-secondary font-semibold">Leave YourFeedback</h5>
            <p className="font-light text-center">Share your experience and help us improve our services with your valuable feedback.</p>
        </div>

      </motion.div>

    </div>
  );
};

export default HowItWorks;

interface HeroProps {
    image: string;
    info: string;
  }
import { motion } from "framer-motion";

const Hero: React.FC<HeroProps> = ({ image, info }) => {
    return (
        <div className="">
            <motion.div
             initial={{ opacity: 0, scale:0.8 }}
             whileInView={{ opacity: 1, scale:1 }}
             transition={{ duration: 0.9, delay: 0.25 }}
             viewport={{ once: true }}
            className="bg-[#CDF5FE] rounded-t-full min-h-[380px]">
                <div className="container w-full h-full py-6 flex flex-col items-center justify-center  lg:min-h-[400px]">
                    <img src={image} alt="Trouma" className="w-[290px] mt-5"/>
                    <h2 className="heading-3 text-center mt-2">
                    {info}
                    </h2>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero

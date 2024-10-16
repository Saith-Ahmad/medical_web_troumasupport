import { motion } from "framer-motion";
interface ChatProps {
  image?: string;
  msg?: string;
}
function DoctorChatMsg({ image, msg }: ChatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      viewport={{ once: true }}
      className="bg-[#CDF5FE] max-w-[340px] rounded-2xl self-end">
      <div className="flex gap-3 p-5 justify-start items-center">
        <img src={image} alt="dr-3" className="w-[60px] rounded-full" />
        <p className="text-gray-600">{msg}</p>
      </div>
    </motion.div>
  )
}

export default DoctorChatMsg
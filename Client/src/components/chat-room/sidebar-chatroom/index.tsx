import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SidebarChatroom() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      viewport={{ once: true }}
      className="min-w-[300px] max-w-[380px] border-r-2 border-gray-200 px-3">
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="flex justify-center items-center gap-4 w-full">
          <p className="font-semibold">Period</p>
          <select className="flex-1 px-1 py-0 rounded-md min-h-[60px] border-2 border-gray-200 focus:border-2 focus:border-gray-300 focus:outline-none w-full">
            <option value="location1" className="text-gray-800">2023/2024</option>
            <option value="location1" className="text-gray-800">2022/2023</option>
            <option value="location1" className="text-gray-800">2021/2022</option>
            <option value="location1" className="text-gray-800">2020/2021</option>
          </select>
        </div>
        <div className="relative w-full bg-white border-2 border-gray-200 shadow-sm px-4 py-3 rounded-lg flex justify-start items-center gap-3">
          <Search />
          <input type="text" placeholder="Acute Troma" className="focus:outline-none" />
        </div>
        <div className="p-3 border-t-2 border-dotted border-gray-300 w-full">
          <p className="para-large text-primary font-semibold">Complex Trouma</p>
          <p className="text-gray-500">01 Contributor</p>
        </div>
        <div className="p-3 border-t-2 border-dotted border-gray-300 w-full">
          <p className="para-large text-primary font-semibold">Trauma results from a single</p>
          <p className="text-gray-500">02 Contributors</p>
        </div>
        <div className="p-3 border-t-2 border-dotted border-gray-300 w-full">
          <p className="para-large text-primary font-semibold">Development Trouma</p>
          <p className="text-gray-500">03 Contributors</p>
        </div>
        <div className="p-3 border-t-2 border-dotted border-gray-300 w-full">
          <p className="para-large text-primary font-semibold">Each form of trauma...</p>
          <p className="text-gray-500">02 Contributors</p>
        </div>
      </div>
    </motion.div>
  )
}

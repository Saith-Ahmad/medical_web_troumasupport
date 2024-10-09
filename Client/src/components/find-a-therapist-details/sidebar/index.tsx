import { MapPin } from "lucide-react"
import Map from "../../../assets/map.png"
import { motion } from "framer-motion"

function SidebarTherapistDetail() {
  return (
    <motion.div
    initial={{ opacity: 0, x: 115 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            viewport={{ once: true }}
    className='bg-dullwhite min-w-[335px] min-h-[625px] p-5'>
      <div className="flex flex-col">
        <div className="min-h-[170px]  flex flex-col justify-center items-center mb-4">
          <div className="relative">
          <img src={Map} alt="location" />
          <button className="bg-[#1591babd] text-white px-5 py-3 rounded-sm absolute top-[25%] left-[10%]"><MapPin className="inline"/> View Map Location</button>
          </div>
          <p className=" para-medium mt-4">Picadilly House, 49 Picadilly, Manchester, Greater Manchester, M1 2AP</p>
        </div>

        <div className="min-h-[150px] border-t-2 border-t-[#E5E5EA] pt-5">
          <p className="para-medium font-medium">Type of therapy</p>
          <p>In Person</p>
          <p>Online</p>
          <p>Phone</p>
        </div>

        <div className="min-h-[150px] border-t-2 border-t-[#E5E5EA] pt-5">
          <p className="para-medium font-medium">Key Details</p>
          <p>DBS check</p>
          <p>Wheelchair user access</p>
        </div>

        <div className="min-h-[150px] border-t-2 border-t-[#E5E5EA] pt-5">
          <p className="para-medium font-medium">Online platforms</p>
          <p>Zoom</p>
        </div>
      </div>
    </motion.div>
  )
}

export default SidebarTherapistDetail
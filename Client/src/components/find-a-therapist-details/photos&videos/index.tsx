import Therapy1 from "../../../assets/therapy-detail-1.png"
import Therapy2 from "../../../assets/therapy-detail-2.png"
import Therapy3 from "../../../assets/therapy-detail-3.png"
import { motion } from "framer-motion"
function PhotosNvideos() {
    return (
        <motion.div
        initial={{ opacity: 0, x: 75, y:75 }}
            whileInView={{ opacity: 1, x: 0, y:0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
        className='w-full lg:min-w-[700px] bg-white p-5 my-10 rounded-xl py-10'>
            <p className="para-large font-semibold">Photos & Videos</p>
            <div className="flex flex-col md:flex-wrap md:flex-row gap-3 mt-4">
                <img src={Therapy3} alt="Therapy Details" className="rounded-sm"/>
                <img src={Therapy1} alt="Therapy Details" className="rounded-sm"/>
                <img src={Therapy2} alt="Therapy Details" className=""/>
            </div>
        </motion.div>
    )
}

export default PhotosNvideos
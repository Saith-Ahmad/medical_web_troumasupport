import { motion } from "framer-motion"
function TheripiesOffered() {
    return (
        <motion.div
        initial={{ opacity: 0, y: -115 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
        className='w-full lg:min-w-[700px] bg-white p-5 my-10 rounded-xl py-10'>
            <article className='flex flex-col justify-start items-start  gap-5 para-medium'>
                <p className='para-large font-semibold'>Therapies offered</p>
                <div className="flex flex-col md:flex-row justify-between items-start w-full gap-5 ">
                    <ul className="list-inside marker:text-secondary md:w-[50%] list-disc">
                        <li className="before:mr-2 hover:font-semibold cursor-pointer">Humanistic therapies</li>
                        <li className="before:mr-2 hover:font-semibold cursor-pointer">Integrative counselling</li>
                        <li className="before:mr-2 hover:font-semibold cursor-pointer">Solution focused brief therapy</li>
                    </ul>
                    
                    <ul className="list-inside marker:text-secondary md:w-[50%] list-disc">
                        <li className="before:mr-2 hover:font-semibold cursor-pointer">Person-centred therapy</li>
                        <li className="before:mr-2 hover:font-semibold cursor-pointer">Mindfulness</li>
                        <li className="before:mr-2 hover:font-semibold cursor-pointer">Compassion-focused therapy</li>
                    </ul>

                </div>

            </article>
        </motion.div>
    )
}

export default TheripiesOffered
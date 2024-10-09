import { motion } from "framer-motion"
function AreasOfCouncelling() {
    return (
        <motion.div
        initial={{ opacity: 0, x: 95 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.13 }}
            viewport={{ once: true }}
        className='w-full lg:min-w-[700px] bg-white p-5 my-10 rounded-xl py-10'>
            <article className='flex flex-col justify-start items-start  gap-5 para-medium'>
                <p className='para-large font-semibold'>Areas of counselling I deal with</p>
                <div className="flex flex-col md:flex-row justify-between items-start w-full gap-5">
                    <ul className="list-inside text-secondary md:w-[50%]">
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Abortion</li>
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Affairs and betrayals</li>
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Antisocial personality disorder</li>
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Avoidant personality disorder</li>
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Bipolar disorder</li>
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Cancer</li>
                    </ul>
                    
                    <ul className="list-inside text-secondary md:w-[50%]">
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Abuse</li>
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Anger management</li>
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Anxiety</li>
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Bereavement</li>
                        <li className="before:content-['✓'] before:mr-2 hover:font-semibold cursor-pointer">Bullying</li>
                    </ul>

                </div>

            </article>
        </motion.div>
    )
}

export default AreasOfCouncelling
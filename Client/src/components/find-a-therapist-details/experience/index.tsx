import { motion } from "framer-motion"
function Experience() {
    return (
        <motion.div
        initial={{ opacity: 0, x: -115 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            viewport={{ once: true }}
        className='w-full lg:min-w-[700px] bg-white p-5 my-10 rounded-xl py-10'>
            <article className='flex flex-col justify-start items-start  gap-5 para-medium'>
                <p className='para-large font-semibold'>Training, qualifications & experience</p>
                <p>With a BSc Hons in Counselling and Psychotherapy, I have been actively involved in the mental health field since 2013. My experience spans across working with the NHS, IAPT services, charitable organizations, and supporting children within school environments. In addition to private practice, I conduct mental health workshops in community settings, private sectors, and professional organizations.
                </p>

                <p>I have extensive experience assisting individuals from various backgrounds, helping them navigate challenges such as anxiety, ADHD, low mood, depression, relationship issues, attachment difficulties, grief and loss, trauma, childhood abuse and neglect, sexual abuse, domestic violence, self-harm, addiction, and chronic illness.</p>

                <p>I am dedicated to further developing/enhancing my training and carry out regular continued professional development.</p>

                <p className="font-semibold">Member organisations</p>

                <p className="border-2 border-black p-1 text-3xl font-light">BACP</p>
            </article>
        </motion.div>
    )
}

export default Experience
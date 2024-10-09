import { motion } from "framer-motion"
function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.25 }}
            viewport={{ once: true }}
        className='w-full lg:min-w-[700px] bg-white p-5 my-10 rounded-xl py-10'>
            <article className='flex flex-col justify-start items-start  gap-5 para-medium'>
                <h3 className='heading-3'>About <span className='text-primary'>Me</span></h3>
                <p>With over 22 years of experience as a psychotherapist, I've dedicated my career to helping individuals navigate life's challenges. My extensive clinical background, including 17,000+ hours of practice, has equipped me with a deep understanding of human behavior and a passion for providing effective therapeutic care.</p>

                <p>As a certified EMDR therapist, I specialize in treating trauma and other distressing experiences. My dual accreditation in Psychoanalytic Psychotherapy and Humanistic & Integrative Psychotherapy allows me to offer a personalized and flexible approach tailored to each client's unique needs.</p>

                <p>My integrative approach draws on various therapeutic models, grounded in a psychoanalytic framework of human development, motivation, and behavior. While acknowledging the profound impact of past attachments on our identities, I focus on the present-day dynamics within the therapeutic relationship. By exploring current patterns of thought, feeling, and behavior, we can work together to identify areas for growth and make subtle but meaningful changes.</p>

                <p>
                    I am experienced in addressing a wide range of issues, including:
                    <ul className='list-disc list-inside'>
                        <li>Emotional numbness and feelings of emptiness</li>
                        <li>Lack of a secure identity and search for meaning in life</li>
                        <li>Trauma (including physical and sexual abuse)</li>
                        <li>OCD and obsessional thinking</li>
                        <li>Relationship difficulties</li>
                        <li>Grief</li>
                    </ul>
                </p>
            </article>
        </motion.div>
    )
}

export default AboutMe
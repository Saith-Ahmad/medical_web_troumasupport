import JumpTo from "@/components/about-us/jump-to"
import Team from "../../assets/team.png"
import { motion } from "framer-motion"

function AboutUs() {
    return (
        <div className="container mt-10">
            <h3 className="heading-3">About <span className="text-primary">Us</span></h3>
            <div className="'w-full bg-offwhite p-1 lg:px-6 rounded-xl shadow-xl my-10 font-light md:w-[80%] md:ms-[10vh]">
                <div>
                    <JumpTo />
                    <motion.div
                    initial={{ opacity: 0, x: 75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    viewport={{ once: true }}
                    className='w-full lg:min-w-[700px] bg-white p-5 my-10 rounded-xl py-10 '>
                        <article className='flex flex-col justify-start items-start  gap-5 para-medium'>
                            <h3 className='heading-3'>Our <span className='text-primary'>Vision</span></h3>
                            <p>We envision a world where individuals affected by trauma are empowered to heal and thrive. We aim to provide a safe, supportive space where survivors can share their stories, access professional resources, and find comfort in community. Through education, empathy, and a holistic approach to healing, we seek to foster resilience and inspire hope in those walking the path of recovery</p>
                            <p>Our long-term goal is to break the stigma surrounding trauma by creating a more understanding and compassionate society. We believe that every individual’s journey is unique, and our platform strives to honor that by offering personalized support, advocacy, and tools for lasting healing. We are committed to being a beacon of light for all those seeking to rebuild their lives and find peace after trauma.</p>
                        </article>
                    </motion.div>


                    <motion.div
                    initial={{ opacity: 0, x: -75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    viewport={{ once: true }}
                    className='w-full lg:min-w-[700px] bg-white p-5 my-10 rounded-xl py-10'>
                        <article className='flex flex-col justify-start items-start  gap-5 para-medium'>
                            <h3 className='heading-3'>Why <span className='text-primary'>Choose Us</span></h3>
                            <p>we prioritize a trauma-informed approach that respects and understands the complexities of each individual’s healing journey. Our platform is designed to offer comprehensive support through a combination of expert guidance, peer connection, and educational resources. We stand apart by creating a safe, judgment-free space where survivors can share their stories, access professional help, and find solace in a community that truly understands their experience.</p>
                            <p>What makes us unique is our commitment to holistic healing. We believe that trauma recovery involves addressing the mind, body, and spirit, and we provide tools that cater to these aspects of well-being. Whether you’re seeking emotional support, practical advice, or therapeutic resources, our platform is tailored to meet your needs with compassion and care, helping you move forward on your healing journey with confidence.</p>
                        </article>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    viewport={{ once: true }}
                    className='w-full lg:min-w-[700px] bg-white p-5 my-10 rounded-xl py-10'>
                        <article className='flex flex-col justify-start items-start  gap-5 para-medium'>
                            <h3 className='heading-3'>Our <span className='text-primary'>Team</span></h3>
                            <div className="flex flex-col justify-center items-center gap-10">
                                <img src={Team} alt="Team" className="" />
                                <p>Our team at is made up of compassionate professionals who are dedicated to supporting trauma survivors. With expertise in mental health, counseling, and trauma-informed care, our team works tirelessly to provide personalized guidance and a safe space for healing. We are driven by empathy, understanding, and a shared commitment to helping individuals rebuild their lives, offering resources and support that empower each person to find their path toward recovery.</p>
                            </div>
                        </article>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs
import { motion } from "framer-motion"
import Hero from "@/components/understanding-trouma/hero"
import Chat from "../../assets/therapist-chat.png"
import Dr from "../../assets/dr.3.png"
import Avatar from "../../assets/3d_avatar_16.png"
import PersonChatMsg from "@/components/therapist-chat/person-chat-msg"
import DoctorChatMsg from "@/components/therapist-chat/doctor-chat-msg"
import SendEmail from "@/components/therapist-chat/send-email"
import SelfCarePlans from "@/components/therapist-chat/selfcare-plans"
import CallToAction2 from "@/components/understanding-trouma/callToAction2"

export default function TherapistChat() {
    return (
        <div>
            <Hero image={Chat} info={"Connect with a Trauma-Informed Therapist—Start Your Healing Journey with Confidential, Compassionate Support Today."} />
            <div className="flex flex-col md:flex-row gap-5 container my-10 bg-offwhite w-full p-5">
                <motion.div
                    initial={{ opacity: 0, x: 75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    viewport={{ once: true }}
                    className=" w-full md:w-[25%] flex flex-col justify-start items-center gap-4">
                    <img src={Dr} alt="dr" className="w-[250px] rounded-full border-[10px] border-white" />
                    <div className="flex flex-col items-center justify-start max-w-[300px] gap-2">
                        <div className="flex gap-3 justify-center items-center">
                            <p className="para-large font-semibold">Dr. Jane Doe</p>
                            <button className="bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-800">Activate</button>
                        </div>
                        <p className="text-gray-500">Psychoanalytic Psychotherapist, PhD from the University of Manchester (Research area: OCD)</p>
                    </div>
                </motion.div>

                <div className="w-full md:w-[73%] bg-white rounded-xl min-h-[700px] px-5 py-7 flex flex-col gap-3 justify-end">
                    <PersonChatMsg image={Avatar} msg={"Hi Doctor, I need your help can you book my appointment"} />
                    <DoctorChatMsg image={Dr} msg="Yes! sure Please share" />
                    <SendEmail />
                </div>
            </div>
            <SelfCarePlans />
            <CallToAction2/>
        </div>
    )
}

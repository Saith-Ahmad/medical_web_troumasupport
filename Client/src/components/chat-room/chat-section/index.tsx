import { Calendar, CircleAlert } from "lucide-react";
import Question from "../question";
import ReplyText from "../reply-text";
import JoinDiscussion from "../join-discussion";
import { motion } from "framer-motion";

function ChatSection() {
    return (
        <>
            <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex flex-col border-2 border-gray-100 rounded-xl p-7 gap-3">
                <p className="para-large font-bold text-secondary">
                    Trauma results from a single distressing event
                </p>
                <div className="para-medium text-gray-600 flex gap-3 justify-start items-center">
                    <Calendar /> <p>01 Sep 2024 </p>
                </div>
            </motion.div>

            <div>
                <Question
                    name="Monica"
                    question="I want to know about Acute Trauma and Trauma results from a single distressing event"
                    replies={4}
                />
                <div className="bg-[#FFF6E6] flex justify-start items-center text-primary p-5 my-3 gap-3">
                    <CircleAlert />
                    <p className="text-gray-800">
                        Feel free to share your experiences or thoughts.
                    </p>
                </div>

                <div className=" lg:ms-16">
                    <ReplyText
                        name="Dr. Adin"
                        reply="This type of trauma results from a single, distressing event, such as an accident, natural disaster, or sudden loss. It often leads to intense emotional reactions, such as shock, fear, or denial."
                    />

                    <ReplyText
                        name="Rini Nirmala"
                        reply="But i think if someone effecting from all of them leads to death"
                    />

                    <JoinDiscussion placeholder="Join Discussion" />
                </div>

                <ReplyText
                    name="Jonathan Duel" date='02 Sep 2024' time='08:12'
                    reply="How does one cope with trauma from a single event?"
                />

                <ReplyText
                    name="Jonathan Duel" date='02 Sep 2024' time='08:12' image='6'
                    reply="How does one cope with trauma from a single event?"
                />
                <JoinDiscussion />
            </div>
        </>
    );
}

export default ChatSection;

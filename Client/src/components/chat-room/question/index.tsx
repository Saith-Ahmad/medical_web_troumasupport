import { ChevronUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface QuestionProps {
    name?: string;
    question?: string;
    replies?: number;
}

function Question({ name = "John", question = "Question", replies = 0 }: QuestionProps) {
  return (
    <motion.div
    initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
    className="w-full bg-offwhite flex p-5 gap-5 mt-5 rounded-lg justify-start items-start">
        <div className="w-[50px] h-[50px] min-w-[50px] bg-gray-400 rounded-full border-4 border-white"></div>
        <div className="flex flex-col">
            {/* Ensure the props are being displayed correctly */}
            <p className="para-large text-primary font-semibold">{name}</p>
            <p>{question}</p>

            <div className="flex text-secondary gap-3 font-semibold items-center justify-start mt-3">
                <MessageCircle />
                <p>{replies} Answers</p> 
                <ChevronUp />
            </div>
        </div>
    </motion.div>
  );
}

export default Question;

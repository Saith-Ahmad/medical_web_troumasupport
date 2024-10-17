import { Upload } from "lucide-react";
import { motion } from "framer-motion";

interface ReplyTextProp {
    name?: string;
    reply?: string;
    date?: string,
    time?: string,
    image?: string
}

function ReplyText({ name = "John", reply, date = '', time = '', image = '' }: ReplyTextProp) {
    return (
        <>
            <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="w-full flex-col lg:flex-row flex p-5 lg:gap-5 mt-5 rounded-lg justify-start items-start">
                <div className="w-[50px] h-[50px] min-w-[50px] bg-gray-400 rounded-full border-4 border-white -mb-5 lg:mb-0"></div>
                <div className="flex flex-col">
                    <p className="self-center para-small"><span className="mr-2">{date}</span> <span>{time}</span></p>
                    <p className="para-large text-primary font-semibold">{name}</p>
                    <p>{reply}</p>
                    {image.length >= 1 && <div className="mt-5">
                        <p>filename.png</p>
                        <div className="bg-gray-300 w-[220px] h-[220px] rounded-lg flex items-center justify-center relative">
                            <Upload className="absolute right-5 top-5 text-gray-700 "/>
                            <p>Join The Discussion</p>
                        </div>
                    </div>}
                </div>
            </motion.div>
        </>
    );
}

export default ReplyText;

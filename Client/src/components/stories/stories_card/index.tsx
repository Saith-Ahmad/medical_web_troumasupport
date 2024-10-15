import { motion } from "framer-motion"
interface StoriesCardProps {
    image : string,
    title : string,
    description : string
}

const StoriesCard = ({image, title, description} : StoriesCardProps) => {
    return (
        <motion.div
        initial={{ opacity: 0, scale:0.7 }}
        whileInView={{ opacity: 1, scale:1 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        viewport={{ once: true }}
        className="relative object-cover w-[300px] h-[350px] p-5 flex flex-col justify-end rounded-xl"
            style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl" />
            <div className="relative z-10">
                <p className="para-large font-semibold text-white">{title}</p>
                <p className="para-medium text-white !font-light">{description}</p>
            </div>
        </motion.div>
    )
}

export default StoriesCard;

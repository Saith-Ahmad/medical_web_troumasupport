import Card from "../card";
import { motion } from "framer-motion";
const LatestArticles = () => {
  return (
    <div className="container my-20">
      <h2 className="heading-2 text-center md:text-start">
        Latest
        <span className="text-primary"> Articles</span>
      </h2>

      {/* Cards Container */}
      <motion.div
       initial={{ opacity: 0, y: 75 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.9, delay: 0.25 }}
       viewport={{ once: true }}
      className="flex flex-col lg:flex-row gap-8 justify-between">
        <Card />
        <Card />
        <Card />
      </motion.div>
    </div>
  );
};

export default LatestArticles;

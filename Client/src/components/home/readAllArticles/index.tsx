import JobProblem from "../../../assets/problem-in-job-finding.png"
import MoralDown from "../../../assets/moral-down.png"
import BackgroundReactangle from "../../../assets/background_rectangle.svg"
import { motion } from "framer-motion"
import FamilyIssues from "../../../assets/family-isues.png"
import StressManagement from "../../../assets/stress-managment.png"

const ReadAllArticles = () => {
  return (
    <div className="relative container my-20">
      <div className="relative lg:h-[560px] rounded-3xl w-full py-5 lg:py-0"  style={{
          backgroundImage: `url(${BackgroundReactangle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="relative z-[10] flex flex-col lg:flex-row p-7 items-center justify-between h-full">

          <motion.div
           initial={{ opacity: 0, x: -75 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.9, delay: 0.25 }}
           viewport={{ once: true }}
          className="lg:w-1/2 w-full lg:p-10 p-3">
            <h2 className="heading-2">
              Find the right person
              <span className="text-primary"> For what you need.</span>
            </h2>
          </motion.div>

          <motion.div
           initial={{ opacity: 0, y: 75 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9, delay: 0.45 }}
           viewport={{ once: true }}
          className="lg:w-1/2 w-full flex flex-col justify-between gap-5">
            <div className="flex flex-row justify-around">
              <div className="flex flex-col max-w-[200px] items-center justify-center lg:-mt-24 ">
                <img src={StressManagement} alt="stress management" className="w-[54px]"/>
                <p  >Stress <span className="text-secondary">Management</span></p>
                <p className="font-light text-[12px] text-center">Looking to manage stress? Practice deep breathing, exercise regularly, prioritize self-care, and seek support.</p>
              </div>
              <div className="flex flex-col max-w-[200px] items-center justify-center lg:-mt-44">
                <img src={FamilyIssues} alt="stress management" className="w-[54px] z-20"/>
                <p className="text-center">Family <span className="text-secondary">issues</span></p>
                <p className="font-light text-[12px] text-center">Struggling in connecting with family members, leading to conflicts and misunderstandings in relationships</p>
              </div>
            </div>
            <div className="flex flex-row justify-around ">
              <div className="flex flex-col max-w-[200px] items-center justify-center lg:mt-10">
                <img src={JobProblem} alt="stress management" className="w-[54px]"/>
                <p className="text-center">Problem in <span className="text-secondary">Job Finding</span></p>
                <p className="font-light text-[12px] text-center">Challenges in finding a job include lack of opportunities, insufficient skills, or limited networking connections.</p>
              </div>
              <div className="flex flex-col max-w-[200px] items-center justify-center ">
                <img src={MoralDown} alt="stress management" className="w-[104px] rounded-sm"/>
                <p className="text-center">Moral<span className="text-secondary">Down</span></p>
                <p className="font-light text-[12px] text-center">Feeling demotivated due to setbacks or failures, leading to a decrease in confidence and self-esteem.</p>
              </div>
            </div>
          </motion.div>

          <motion.button
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1}}
           transition={{ duration: 1.1, delay: 0.25 }}
           viewport={{ once: true }}
          className="absolute lg:-bottom-5 lg:left-[45%] -bottom-10 bg-primary text-base text-white py-2 px-7 rounded-sm hvr-scl-primary"> 
            Read All Articles
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ReadAllArticles;

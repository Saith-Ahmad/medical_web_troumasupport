import JobProblem from "../../../assets/problem-in-job-finding.png";
import MoralDown from "../../../assets/moral-down.png";
import BackgroundRectangle from "../../../assets/background-rectangle.png";
import { motion } from "framer-motion";
import FamilyIssues from "../../../assets/family-isues.png";
import StressManagement from "../../../assets/stress-managment.png";

const ReadAllArticles = () => {
  return (
    <div className="relative container my-20">
      <div
        className="relative lg:h-[590px] rounded-[60px] w-full py-5 lg:py-0 bg-offwhite lg:bg-transparent 2xl:bg-offwhite"
        style={{
          backgroundImage: `url(${BackgroundRectangle})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-[10] flex flex-col lg:flex-row p-7 items-center justify-between h-full">
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full lg:p-10 p-3"
          >
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
            className="lg:w-1/2 w-full flex flex-col justify-between gap-5"
          >
            <div className="flex flex-row justify-around items-end gap-1">
              <div className="flex flex-col gap-1 max-w-[280px] items-start justify-center">
                <img
                  src={StressManagement}
                  alt="Stress Management"
                  className="w-[54px] self-center mb-5"
                />
                <p>
                  Stress <span className="text-secondary font-semibold">Management</span>
                </p>
                <p className="font-light para-medium leading-6">
                  Looking to manage stress? Practice deep breathing, exercise
                  regularly, prioritize self-care, and seek support.
                </p>
              </div>
              <div className="flex flex-col gap-1 max-w-[280px] items-start justify-center">
                <img
                  src={FamilyIssues}
                  alt="Family Issues"
                  className="w-[74px] z-20 self-center mb-5"
                />
                <p className="font-semibold">
                  Family <span className="text-secondary">issues</span>
                </p>
                <p className="font-light para-medium leading-6">
                  Struggling in connecting with family members, leading to
                  conflicts and misunderstandings in relationships.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around items-end gap-1 lg:gap-5">
              <div className="flex flex-col gap-1 max-w-[280px] items-start justify-center">
                <img
                  src={JobProblem}
                  alt="Job Finding Problems"
                  className="w-[54px] self-center mb-5"
                />
                <p className="font-semibold">
                  Problem in <span className="text-secondary">Job Finding</span>
                </p>
                <p className="font-light para-medium leading-6">
                  Challenges in finding a job include lack of opportunities,
                  insufficient skills, or limited networking connections.
                </p>
              </div>
              <div className="flex flex-col gap-1 max-w-[280px] items-start justify-center">
                <img
                  src={MoralDown}
                  alt="Moral Down"
                  className="w-[104px] rounded-sm self-center mb-5"
                />
                <p className="font-semibold">
                  Moral<span className="text-secondary"> Down</span>
                </p>
                <p className="font-light para-medium leading-6">
                  Feeling demotivated due to setbacks or failures, leading to a
                  decrease in confidence and self-esteem.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.25 }}
            viewport={{ once: true }}
            className="absolute xl:-bottom-3 lg:bottom-10 lg:left-[45%] -bottom-10 bg-primary text-base text-white py-2 px-7 rounded-sm hvr-scl-primary"
          >
            Read All Articles
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ReadAllArticles;

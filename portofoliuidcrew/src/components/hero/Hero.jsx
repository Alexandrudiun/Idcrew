import { motion } from "framer-motion";

import { styles } from "../../style";
import '../../components/hero/hero.css';
import ComputersCanvas from "../canvas/Computers";
import Tehnologies from "../Tehnologies/Tehnologies";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-icon">
          <div className="circle" />
          <div className="line" />
        </div>

        <div>
          <h1 className="hero-text">
            Hi, we are <span className="text-[#bf77f6]">I&D Crew</span>
          </h1>
          <p className="hero-subtext">
            Full-stack developers, we create web pages/web apps with a focus on <br /> both UI/UX design and back-end functionality. <br /> We enjoy collaborating on <br /> comprehensive projects, going to hackathons and <br /> we have a true passion for video filmmaking/editing.
          </p>
          <Tehnologies />
        </div>
      </div>

      <ComputersCanvas />

      <div className="hero-scroll">
        <a href="#about">
          <div className="scroll-container">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="scroll-ball"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
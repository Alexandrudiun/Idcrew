import { motion } from "framer-motion";

import { styles } from "../../style";
import '../../components/hero/hero.css';
import ComputersCanvas from "../canvas/Computers";

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
            Hi, we are <span className="text-[#915EFF]">I&D Crew</span>
          </h1>
          <p className="hero-subtext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Recusandae, necessitatibus quae quos dolores natus <br /> repellendus sed cupiditate fuga commodi corrupti nobis excepturi, harum sunt voluptatum tempore <br /> eius ipsa neque error corporis qui quaerat nam magni ex omnis! Pariatur, dolore sit.
          </p>
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
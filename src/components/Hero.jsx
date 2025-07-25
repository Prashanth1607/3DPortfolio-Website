import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
//import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-3'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          {/* <div className="flex gap-10"> */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Prashanth</span>
          </h1>

          {/* </div> */}
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Expertise in Software Development, Cloud Computing, <br className='sm:block hidden' />
            Networking and Some Devops Tools
          </p>

        </div>
      </div>

      <ComputersCanvas />

      {/* <div className='absolute xs:bottom-3 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[27px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
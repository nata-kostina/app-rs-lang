import styles from "./styles.module.scss";

import Container from "../../../components/Container";
import WhiteBgFlag from "../WhiteBgFlag";
import ColorSubTitle from "../ColorSubTitle";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.8 },
  })
}


const Hero = () => {
  return (
    <div className={styles.promo}>
      <Container>
        <div className={styles.wrapper}>
          <div style={{ margin: "12rem 0 3rem" }}>
            <ColorSubTitle width='120' height='40' color='#ffffff'>
              Why to choose RS Lang
            </ColorSubTitle>
            <div style={{ margin: "2rem" }}></div>
            <h2 className={styles.title}>Why do people like learning English in RS Lang</h2>
          </div>
          <div className={styles["flex-center"]}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={textAnimation} custom={1}
            >
              <WhiteBgFlag width='250' height='350'>
                <div                >
                  <h4 className={styles.smalltitle} style={{ color: "#1ab9ff" }}>
                    One of the most popular languages in the world
                  </h4>
                  <p>
                    Every fifth person in the world speaks or understands it. English is official or one of the main
                    spoken languages in more than 50 countries.
                  </p>
                </div>
              </WhiteBgFlag>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={textAnimation} custom={2}
            >
              <WhiteBgFlag width='250' height='350'>
                <div>
                  <h4 className={styles.smalltitle} style={{ color: "#1ab9ff" }}>
                    Brings you new possibilities
                  </h4>
                  <p>
                    English is the language of business. It increases your chances of getting a good job or starting a job
                    abroad, so start studying now!
                  </p>
                </div>
              </WhiteBgFlag>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={textAnimation} custom={3}
            >
              <WhiteBgFlag width='250' height='350'>
                <div>
                  <h4 className={styles.smalltitle} style={{ color: "#1ab9ff" }}>
                    The greatest works of world literature and science are written in English
                  </h4>
                  <p>Do you want to read the books of great English writers in the original?</p>
                </div>
              </WhiteBgFlag>
            </motion.div>
          </div>
        </div>
      </Container >
    </div >
  );
};

export default Hero;

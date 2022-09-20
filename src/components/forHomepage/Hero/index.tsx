import styles from "./styles.module.scss";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { RouteNames } from "../../../router";
import Container from "../../../components/Container";
import LinkButton from "../LinkButton";
import BgFlag from "../BgFlag";
import Arrow from "../Arrow";
import CheckCircle from "../CheckCircle";


const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.8 },
  })
}

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.promo}>
            <div className={styles["soft-font-2"]}>
              <div className={styles["title"]}>Learn English with
                <span className={styles["flex-top"]}>
                  <BgFlag width='250' height='160'>
                    RS Lang
                  </BgFlag>
                  <Arrow width='100' height='60' />
                </span>
              </div>
            </div>


            <motion.div className={styles.description}
              initial="hidden"
              whileInView="visible"
            >
              <motion.div variants={textAnimation} custom={1}>
                <CheckCircle size='40' bgcolor='#ff6666' textcolor='#2b3c6b'>
                  3600 words
                </CheckCircle>
              </motion.div>
              <motion.div variants={textAnimation} custom={2}>
                <CheckCircle size='40' bgcolor='#b250fe' textcolor='#2b3c6b'>
                  Possibility to choose difficulty level
                </CheckCircle>
              </motion.div>
              <motion.div variants={textAnimation} custom={3}>
                <CheckCircle size='40' bgcolor='#1ab9ff' textcolor='#2b3c6b'>
                  Individualized teaching
                </CheckCircle>
              </motion.div>
              <motion.div variants={textAnimation} custom={4}>
                <CheckCircle size='40' bgcolor='#e9a30d' textcolor='#2b3c6b'>
                  Vocabulary games
                </CheckCircle>
              </motion.div>
              <motion.div variants={textAnimation} custom={5}>
                <CheckCircle size='40' bgcolor='#455b97' textcolor='#2b3c6b'>
                  Learning progress and statistics
                </CheckCircle>
              </motion.div>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={textAnimation}
              custom={6}
              className={styles.slogan}>Learn language is to open a new window into the world
            </motion.h2>
            <div style={{ marginTop: "7rem" }}></div>
            <div className={styles["flex-top"]}>
              <Link to={RouteNames.TEXTBOOK}>
                <LinkButton bgcolor='#2b3c6b'>Let's go</LinkButton>
              </Link>
              <Link to={RouteNames.GAMES}>
                <LinkButton bgcolor='#b250fe'>Play and learn</LinkButton>
              </Link>
            </div>
          </div>
          <div className={styles["hero-image"]}></div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

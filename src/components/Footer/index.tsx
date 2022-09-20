import styles from "./styles.module.scss";

import React from "react";
import Container from "../Container";
import LinkToGit from "./LinkToGit";


const Footer = () => {

  return (
    <footer className={styles["footer"]}>
      <Container>
        <div className={styles["footer-inner"]}>
          <span className={styles["year"]}>2022</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

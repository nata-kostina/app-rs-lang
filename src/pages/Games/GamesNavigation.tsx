import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import { Games } from "../../data/constants";
import { GameMode } from "../../types/types";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import PatternStars from "../../assets/img/patterns/img-stars.png";
import { Card } from "antd";
import { RouteNames } from "../../router";

const GamesNavigation = ({ state }: { state: GameMode }) => {
  return (
    <div className={`${styles["section-games"]}`}>
      <motion.div
        className={`${styles["bg-items"]}`}
        animate={{ rotate: 7 }}
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror" }}
      />
      <img className={`${styles["pattern-stars"]}`} src={PatternStars} alt='' />
      <Section title={"Выбери игру"}>
        <>
          <ul className={`${styles["nav"]}`}>
            {Games.map((game) => {
              return (
                <li className={`${styles["nav__item"]}`}>
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <Link to={`${RouteNames.GAMES}/${game.link}`} state={state}>Поехали!</Link>
                </li>
              );
            })}
          </ul>
        </>
      </Section>
    </div>
  );
};

export default GamesNavigation;

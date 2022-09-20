import React, { useEffect, useState } from 'react';
import LayoutWithIntro from '../../components/LayoutWithIntro';
import Section from './../../components/Section/index';
import styles from './styles.module.scss';
import { useAppSelector } from './../../hooks/useAppSelector';
import getStatisticsActions from './StatisticsActions';
import { StatItem } from '../../types/types';
import Loader from '../../components/Loader';
import TodayStatistics from './TodayStatistics';
import GameStatistics from './GameStatistics';
import Chart from '../../components/ui/Chart';
import patternBulb from '../../assets/img/patterns/program_details1.png';
import SectionTitle from '../../components/SectionTitle';
import Container from '../../components/Container';

const initStats: StatItem = {
  newWords: [],
  percentage: 0,
  sequence: 0,
  gameWordsNum: 0,
  guessedWordsNum: 0,
}

const Statistics = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { date } = useAppSelector((state) => state.game);
  const [todayStats, setTodayStats] = useState(initStats);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
    const statisticsActions = getStatisticsActions(user);
    const fetchStatistics = () => {
      statisticsActions.getSprinStatistics()
        .then((stats) => {
          const today = stats?.daily[`${date}`];
          if (today) {
            setTodayStats(today);
          }
        })
        .catch((error) => {})
        .finally(() => setIsLoading(false));
    };
    fetchStatistics();
  }, [user])
  return (
    <LayoutWithIntro title={'Statistics'}>
      <div className={styles['section-statistics']}>
        <img src={patternBulb} alt="" className={styles["pattern-bulb"]} />
        {!isLoading ? <>
          <Container>
            <SectionTitle title='Statistics today' />
          </Container>
          <div className={styles['tape']}>
            <Container>
              <TodayStatistics stats={todayStats} />
            </Container>
          </div>
          <Section title='Games Statistics'>
            <GameStatistics todayStats={todayStats} />
          </Section>
        </> :
          <Loader />
        }
      </div>
    </LayoutWithIntro >
  );
};

export default Statistics;

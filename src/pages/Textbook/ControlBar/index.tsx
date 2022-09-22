import React from 'react';
import { DisplayedWord, IUser } from '../../../types/types';
import styles from './styles.module.scss';
import { getDictActionsType } from '../Dictionary/dictionaryActions';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { FaGraduationCap, FaTrashAlt } from 'react-icons/fa';
import { AiTwotoneBulb } from 'react-icons/ai';

interface ControlBar {
  word: DisplayedWord,
  dictActions: getDictActionsType,
}

const ControlBar = ({ word, dictActions }: ControlBar) => {
  const isDifficultValue = word.userWord?.optional?.isDifficult;
  const isDifficult = isDifficultValue ? JSON.parse(isDifficultValue.toLowerCase()) : false;
  const isLearnedValue = word.userWord?.optional?.isLearned;
  const isLearned = isLearnedValue ? JSON.parse(isLearnedValue.toLowerCase()) : false;
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={styles['control-bar']}>
      {
        isDifficult ?
          <button
            type="button"
            className={`${styles['btn']} ${styles['btn_delete']}`}
            title='Remove from "Difficult words"'
            onClick={(e) => {
              e.stopPropagation();
              dictActions.removeFromDifficultWords({ id: word.word.id, word: word.word.word, user: user as IUser });
            }}
          >
            <FaTrashAlt />
          </button>
          :
          <button
            type="button"
            className={`${styles['btn']} ${styles['btn_add']}`}
            title='Add to "Difficult words"'
            onClick={(e) => {
              e.stopPropagation();
              dictActions.addToDifficultWords({ id: word.word.id, word: word.word.word, user: user as IUser })
            }
            }
          >
            <FaGraduationCap />
          </button>
      }

      {
        isLearned ?
          <button
            type="button"
            className={`${styles['btn']} ${styles['btn_learned_delete']}`}
            title='Delete from "Learned words"'
            onClick={(e) => {
              e.stopPropagation();
              dictActions.removeFromLearnedWords({ id: word.word.id, word: word.word.word, user: user as IUser });
            }}
          >
            <AiTwotoneBulb color={'#bec71d'}/>
          </button>
          :
          <button
            type="button"
            className={`${styles['btn']} ${styles['btn_learned_add']}`}
            title='Add to "Learned words"'
            onClick={(e) => {
              e.stopPropagation();
              const isDifficultValue = word.userWord?.optional?.isDifficult;
              const isDifficult = isDifficultValue ? JSON.parse(isDifficultValue.toLowerCase()) : false;
              dictActions.addToLearnedWords({ id: word.word.id, word: word.word.word, user: user as IUser, isDifficult });
            }}
          >
            <AiTwotoneBulb />
          </button>
      }
    </div>
  );
};

export default ControlBar;
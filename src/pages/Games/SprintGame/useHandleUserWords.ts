import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { ISetPhaseAction } from "../../../store/reducers/gameReducer/types";
import { GamePhase, IUser, IUserWord, UserWordBody } from "../../../types/types";
import { IWord } from '../../../types/types';
import WordsActions from '../../Textbook/wordsActions';

interface hookProps {
  phase: GamePhase,
  isAuth: boolean,
}
export const useHandleUserWords = ({ phase, isAuth }: hookProps) => {
  const { learnedWords, failedWords } = useAppSelector((state) => state.game);
  const displayedWords = [...learnedWords, ...failedWords];
  const { user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    console.log('useHandleUserWords USEEFFECT phase', phase);
    if (phase !== GamePhase.FINISHED || !isAuth) return;
    displayedWords.forEach((word) => handleSingleWord({
      word,
      userId: (user as IUser).id,
      token: (user as IUser).token,
      learnedWords
    }));
  }, [phase]);
}
interface handleUserWordsParams {
  phase: GamePhase,
  isAuth: boolean,
  displayedWords: IWord[],
  learnedWords: IWord[],
  user: IUser | null,
 // setPhaseAction: ISetPhaseAction,
}
export const handleUserWords = ({ phase, isAuth, displayedWords, user, learnedWords }: handleUserWordsParams) => {
    console.log('handleUserWords phase', phase);
    if (!isAuth) return;
    displayedWords.forEach((word) => handleSingleWord({
      word,
      userId: (user as IUser).id,
      token: (user as IUser).token,
      learnedWords
    }));
}

const handleSingleWord = ({ word, userId, token, learnedWords }:
  { word: IWord, userId: string, token: string, learnedWords: IWord[] }) => {
  WordsActions.isUserWord({ wordId: word.id, userId, token })
    .then((result) => {
      if (result.isUserWord) {
        updateUserWordStatistics({
          wordId: word.id,
          userId,
          token,
          userWord: (result.uWord as IUserWord),
          learnedWords
        });
      } else {
        const body: UserWordBody = {
          optional: {
            statistics: {
              sprint: {
                attempts: '1',
                guessedNum: learnedWords.find((lw) => lw.id === word.id) ? '1' : '0',
              }
            }
          }
        }
        WordsActions.createUserWord({ wordId: word.id, userId, token, body });
      }
    })
    .catch(() => {
      console.log(`Ooops! The word ${word.word} was not added to the statistics.`);
    });
}

interface updateUserWordParams {
  wordId: string,
  userId: string,
  token: string,
  userWord: IUserWord,
  learnedWords: IWord[],
}
const updateUserWordStatistics = ({ wordId, userId, token, userWord, learnedWords }: updateUserWordParams) => {
  let attempts = 1;
  let guessedNum = 0;
  if (userWord.optional?.statistics?.sprint.attempts) {
    attempts += Number(userWord.optional.statistics?.sprint.attempts);
  }

  if (learnedWords.find((w) => w.id === wordId)) { 
    console.log(`Word ${wordId} was found in learnedWords`);
    guessedNum++;   
  }

  if (userWord.optional?.statistics?.sprint.guessedNum) {
    guessedNum = Number(userWord.optional.statistics?.sprint.guessedNum) + guessedNum;
  }

  const updateValue = {
    attempts: attempts.toString(),
    guessedNum: guessedNum.toString(),
  }
  console.log(`guessedNum of Word ${wordId} = ${guessedNum}`);
  WordsActions.updateUserWord({
    wordId: wordId,
    userId,
    token,
    userWord,
    updatePath: 'optional.statistics.sprint',
    updateValue,
  });
}
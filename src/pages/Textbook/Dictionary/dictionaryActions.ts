/* eslint-disable no-restricted-globals */
import _ from "lodash";
import { Dispatch, SetStateAction } from "react";
import Modal from "../../../components/ui/Modal";
import { RouteNames } from "../../../router";
import { IUser, DisplayedWord } from "../../../types/types";
import { IWord } from '../../../types/types';
import WordsActions from "../wordsActions";

interface actionParams {
  id: string,
  word: string,
  user: IUser,
  isDifficult?: boolean,
}

export const getDictActions = ({ setIsProcessing, words, setDictWords, setSelectedWord }: getDictActionsParams) => {
  return {
    addToDifficultWords: ({ id, word, user }: actionParams) => {
      WordsActions.addToDifficultWords({
        wordId: id,
        userId: (user as IUser).id,
        token: (user as IUser).token,
      })
        .then(() => {
          words.forEach((w) => {
            if (w.word.id === id) {
              _.set(w, 'userWord.optional.isDifficult', 'true');
            }
          });
          Modal.showSuccessModal(`The word "${word}" was added to "Difficult words"`);
        })
        .catch(() => {
          Modal.showErrorModal(`Error! The word "${word}" was not added to "Difficult words"`);
        })
        .finally(() => {
          setIsProcessing((prev) => !prev)
        });
    },

    removeFromDifficultWords: ({ id, word, user }: actionParams) => {
      WordsActions.removeFromDifficultWords({
        wordId: id,
        userId: (user as IUser).id,
        token: (user as IUser).token,
      })
        .then(() => {
          Modal.showSuccessModal(`The word "${word}" was removed from "Difficult words"`);
          words.forEach((w) => {
            if (w.word.id === id) {
              _.set(w, 'userWord.optional.isDifficult', 'false');
            }
          });
          if (location.pathname.includes(RouteNames.DIFFICULT_WORDS)) {
            setDictWords(words.filter((w) => w.word.id !== id));
            setSelectedWord(null);
          }
        })
        .catch(() => Modal.showErrorModal(`Error! The word "${word}" was not removed from "Difficult words"`))
        .finally(() => {
          setIsProcessing((prev) => !prev)
        });
    },

    addToLearnedWords: ({ id, word, user, isDifficult }: actionParams) => {
      WordsActions.addToLearnedWords({
        wordId: id,
        userId: (user as IUser).id,
        token: (user as IUser).token,
      })
        .then(() => {
          words.forEach((w) => {
            if (w.word.id === id) {
              _.set(w, 'userWord.optional.isLearned', 'true');
              // if (isDifficult) {
              //   _.set(w, 'userWord.optional.isDifficult', 'false');
              // }
            }
          });
          Modal.showSuccessModal(`The word "${word}" was added to "Learned words"`);
        })
        .catch(() => {
          Modal.showErrorModal(`Error! The word "${word}" was not added to "Learned words"`);
        })
        .finally(() => {
          setIsProcessing((prev) => !prev)
        });
    },

    removeFromLearnedWords: ({ id, word, user }: actionParams) => {
      WordsActions.removeFromLearnedWords({
        wordId: id,
        userId: (user as IUser).id,
        token: (user as IUser).token,
      })
        .then(() => {
          Modal.showSuccessModal(`The word "${word}" was removed from "Learned words"`);
          words.forEach((w) => {
            if (w.word.id === id) {
              _.set(w, 'userWord.optional.isLearned', 'false');
            }
          });
          if (location.pathname.includes(RouteNames.LEARNED_WORDS)) {
            setDictWords(words.filter((w) => w.word.id !== id));
            setSelectedWord(null);
          }
        })
        .catch(() => Modal.showErrorModal(`Error! The word "${word}" was not removed from "Learned words"`))
        .finally(() => {
          setIsProcessing((prev) => !prev)
        });
    }
  }
}

interface getDictActionsParams {
  setIsProcessing: Dispatch<SetStateAction<boolean>>,
  words: DisplayedWord[],
  setDictWords: Dispatch<SetStateAction<DisplayedWord[]>>,
  setSelectedWord: Dispatch<SetStateAction<DisplayedWord | null>>,
}

export interface getDictActionsType {
  addToDifficultWords: ({ id, word, user }: actionParams) => void,
  removeFromDifficultWords: ({ id, word, user }: actionParams) => void,
  addToLearnedWords: ({ id, word, user, isDifficult }: actionParams) => void,
  removeFromLearnedWords: ({ id, word, user }: actionParams) => void,
}


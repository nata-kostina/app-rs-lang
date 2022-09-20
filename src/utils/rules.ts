import { MIN_PASSWORD_LENGTH } from "../data/constants";

export const rules = {
  required: (message: string = 'Required') => {
    return { required: true, message };
  },
  isEmailCorrect: () => {
    return { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Wrong format' }
  },
  isPasswordCorrect: () => {
    return { min: MIN_PASSWORD_LENGTH, message: 'Password can\'t contain less than 8 symbols' }
  }
}
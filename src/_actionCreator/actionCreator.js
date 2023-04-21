import { ADDBYONE, RESET, SUBSTRACTBYONE } from "../_constants/constant";

export const addByOne = () => {
  return { type: ADDBYONE, payload: 1 };
};
export const subByOne = () => {
  return { type: SUBSTRACTBYONE, payload: 1 };
};
export const reset = () => {
  return { type: RESET };
};

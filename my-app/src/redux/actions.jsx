import Type from './constants';

export const saveBudget = value => ({
  type: Type.SAVE_BUDGET,
  payload: value,
});

export const addExpense = expense => ({
  type: Type.ADD_EXPENSE,
  payload: expense,
});

export const removeExpense = id => ({
  type: Type.REMOVE_EXPENSE,
  payload: id,
});

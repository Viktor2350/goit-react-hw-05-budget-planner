export const getAllExpenses = state => state.expense;

export const getBudget = state => state.budget;

export const calculateTotalExpenses = state => {
  const expense = getAllExpenses(state);

  return expense.reduce((total, expens) => total + expens.amount, 0);
};

export const calculateBalance = state => {
  const expenses = calculateTotalExpenses(state);
  const budget = getBudget(state);

  return budget - expenses;
};

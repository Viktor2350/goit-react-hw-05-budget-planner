import React from 'react';
import PropTypes from 'prop-types';
import BudgetForm from '../BudgetForm/BudgetFormContainer';
import ExpenseForm from '../ExpenseForm/ExpenseFormContainer';
import ExpensesTable from '../ExpensesTable/ExpensesTableContainer';
import Values from '../Values/ValuesContainer';
import { Container } from '../Styles/Styles';

const App = ({ expense }) => {
  return (
    <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      {expense.length > 0 && <ExpensesTable />}
    </Container>
  );
};

App.defaultProps = {
  expense: [],
};

App.propTypes = {
  expense: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default App;

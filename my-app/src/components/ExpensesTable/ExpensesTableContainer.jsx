import { connect } from 'react-redux';
import { getAllExpenses } from '../../redux/selectors';
import ExpensesTable from './ExpensesTable';
import { removeExpense } from '../../redux/actions';

const mapStateToProps = state => ({
  items: getAllExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);

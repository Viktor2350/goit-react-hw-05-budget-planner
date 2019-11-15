import { connect } from 'react-redux';
import Values from './Values';
import {
  getBudget,
  calculateBalance,
  calculateTotalExpenses,
} from '../../redux/selectors';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expense: calculateTotalExpenses(state),
  balance: calculateBalance(state),
});

export default connect(
  mapStateToProps,
  null,
)(Values);

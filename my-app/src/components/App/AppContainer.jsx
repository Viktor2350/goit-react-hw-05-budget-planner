import { connect } from 'react-redux';
import { getAllExpenses, getBudget } from '../../redux/selectors';
import App from './App';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expense: getAllExpenses(state),
});

export default connect(
  mapStateToProps,
  null,
)(App);

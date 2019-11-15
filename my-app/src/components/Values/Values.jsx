import React from 'react';
import PropTypes from 'prop-types';
import Stat from '../Stat/Stat';
import { ContainerVal } from '../Styles/Styles';

const Values = ({ budget, expense, balance }) => (
  <ContainerVal>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expense} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </ContainerVal>
);

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expense: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Values;

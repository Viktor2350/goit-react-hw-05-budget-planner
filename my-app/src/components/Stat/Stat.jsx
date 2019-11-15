import React from 'react';
import PropTypes from 'prop-types';
import { Containers, Label, Value } from '../Styles/Styles';

const Stat = ({ label, value, isPositive }) => (
  <Containers isPositive={isPositive}>
    <Label>{label}</Label>
    <Value>{value}&nbsp;&#x24;</Value>
  </Containers>
);

Stat.defaultProps = {
  isPositive: false,
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isPositive: PropTypes.bool,
};

export default Stat;

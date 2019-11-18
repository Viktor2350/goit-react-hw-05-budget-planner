import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { labelStyles } from '../Styles/Styles';

export default class BudgetForm extends Component {
  state = { budget: '' };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.budget <= 0) {
      alert('Введите коректную сумму');
    } else {
      this.props.onSave(Number(this.state.budget));
    }

    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

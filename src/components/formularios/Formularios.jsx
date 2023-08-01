import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin: 50px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  color: #fffff;
  text-align: center;
`;
const Input = styled.input`
  text.align: center;
  padding-left: 20px;
`;
const Button = styled.button`
  border-radius: 5px;
`;

export class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log(name, login, password);
    this.props.onSubmit({ name, login, password });
    form.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormTitle>Formulario</FormTitle>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name"
          required
        />
        <Input type="text" name="login" />
        <Input type="password" name="password" />
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}

export class ElementosControlados extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <input type="text" value={inputValue} onChange={this.handleChange} />
    );
  }
}

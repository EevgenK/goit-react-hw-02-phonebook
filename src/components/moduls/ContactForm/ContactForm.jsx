import PropTypes from 'prop-types';

import { Component } from 'react';
import inititalState from './initialState';

import styles from './contact-form.module.scss';

class ContactForm extends Component {
  state = { ...inititalState };
  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const result = onSubmit({ ...this.state });
    if (result) {
      this.reset();
    }
  };

  reset() {
    this.setState({ ...inititalState });
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}> Name</label>
        <input
          placeholder="Enter name"
          className={styles.input}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          required
        />
        <label className={styles.label}> Number</label>
        <input
          placeholder="Enter phone number"
          className={styles.input}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          required
        />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

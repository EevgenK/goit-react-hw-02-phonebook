import PropTypes from 'prop-types';

import styles from './contact-filter.module.scss';

const ContactFilter = ({ handleChange }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        name="filter"
        placeholder="Filter contacts"
        onChange={handleChange}
      />
    </div>
  );
};
export default ContactFilter;

ContactFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

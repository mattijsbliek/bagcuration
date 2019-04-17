import React from 'react';
import styles from './styles.module.css';

const FormGroup = ({ name, label, type = 'text', required }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name} required={required} />
  </div>
);

export default FormGroup;

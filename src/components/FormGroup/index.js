import React from 'react';
import styles from './styles.module.css';

const FormGroup = ({ name, label, type = 'text' }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name} />
  </div>
);

export default FormGroup;

import React, {useState} from 'react';
import styles from './InputWordForm.module.css';

const InputWordForm = props => {
  
  return (
<form>
<input className={styles.inputWord}
       type={props.type} 
       placeholder={props.placeholder}
       value={props.value}
       onChange={props.onChange}
></input>
</form>
  );
};

export default InputWordForm;
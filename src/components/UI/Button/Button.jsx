import styles from './Button.module.css';

const Button = props => {


return (
<button 
style={props.style}
onClick={props.onClick} 
className={styles.blueButton}
>{props.buttonText}</button>
)
};

export default Button;
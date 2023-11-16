import styles from './LiteButton.module.css';

const LiteButton = props => {
return (
    <button className={styles.liteButton}>{props.buttonText}</button>
)
};

export default LiteButton;
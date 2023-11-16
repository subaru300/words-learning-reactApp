import styles from './TopMenu.module.css';

const TopMenu = props => {
return (
    <div className={styles.topMenu}>
<div className={styles.header}>English Learning App by React</div>
<div className={styles.menu} onClick={props.onMenuSelect}>Main</div>
<div className={styles.menu} onClick={props.onMenuSelect}>Cards</div>
<div className={styles.menu}>Dark\Light mode</div>
    </div>
)
}

export default TopMenu;
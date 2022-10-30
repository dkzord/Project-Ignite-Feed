import styles from './Header.module.css';

import igniteLogo from '../assets/Images/Icons/igniteLogo.svg';

export function Header(){

  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="brand" />
    </header>
  );
}
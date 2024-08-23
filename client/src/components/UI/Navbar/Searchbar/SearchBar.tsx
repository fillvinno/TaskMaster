import React from 'react';
import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <form className={styles.wrap}>
      <input
        type="text"
        placeholder='Поиск'
        className={styles.input}
      />
    </form>
  );
};

export default SearchBar;
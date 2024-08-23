import React from 'react';
import styles from './Navbar.module.scss'
import {Link} from "react-router-dom";
import logo from '../../../assets/logo.svg'
import Profile from "./Profile/Profile.tsx";
import SearchBar from "./Searchbar/SearchBar.tsx";

const Navbar = () => {
  return (
    <header className={styles.wrap}>
      <Link to='/' className={styles.logo}>
        <img src={logo} alt="logo" height='36px'/>
        TaskMaster
      </Link>
      <div className={styles.buttons}>

      </div>
      <div className={styles.utils}>
        <SearchBar/>
        <Profile/>
      </div>
    </header>
  );
};

export default Navbar;
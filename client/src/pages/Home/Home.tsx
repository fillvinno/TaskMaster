import React from 'react';
import Navbar from "../../components/UI/Navbar/Navbar.tsx";
import DeskList from "../../components/DesksList/DeskList.tsx";
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Navbar/>
      <DeskList/>
    </div>
  );
};

export default Home;
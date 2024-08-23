import React from 'react';
import Navbar from "../../components/UI/Navbar/Navbar.tsx";
import DeskList from "../../components/DesksList/DeskList.tsx";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <DeskList/>
    </div>
  );
};

export default Home;
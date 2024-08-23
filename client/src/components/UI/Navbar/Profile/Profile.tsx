import React from 'react';
import styles from './Profile.module.scss'
import profile from "../../../../assets/user.svg";

const Profile = () => {
  return (
    <button className={styles.profile}>
      <img src={profile} alt=""/>
    </button>
  );
};

export default Profile;
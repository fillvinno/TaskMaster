import React, {useState} from 'react';
import styles from './Profile.module.scss'
import profile from "../../../../assets/user.svg";
import ProfileModal from "../../../ProfileModal/ProfileModal.tsx";

const Profile = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)

  function openModal(): void {
    setModalOpen(true)
  }

  function closeModal(): void {
    setModalOpen(false)
  }

  return (
    <>
      <button
        className={styles.profile}
        onClick={openModal}
      >
        <img src={profile} alt=""/>
      </button>
      <ProfileModal isModalOpen={isModalOpen} closeModal={closeModal}/>
    </>
  );
};

export default Profile;
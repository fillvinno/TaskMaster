import React from 'react';
import Modal from "react-modal";
import styles from './ProfileModal.module.scss';
import user from '../../assets/user.svg';

type TProps = {
  isModalOpen: boolean
  closeModal: () => void
}

const customStyles = {
  content: {
    left: 'auto',
    right: '-120px',
    top: '142px',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    backgroundColor: '#1E1E1E',
    width: '250px',
    border: '1px solid #7e7e7e',
  },
};

Modal.setAppElement('#root')

const ProfileModal = (props: TProps) => {
  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      overlayClassName={styles.overlay}
    >
      <div className={styles.wrap}>
        <div className={styles.profile}>
          <div className={styles.iconWrap}>
            <img src={user} className={styles.profileIcon}/>
          </div>
          <div className={styles.info}>
            <p className={styles.name}>Dima Suvorov</p>
            <p className={styles.email}>dsad@mail.ru</p>
          </div>
        </div>
        <ul className={styles.list}>
          <li
            className={styles.item}
          >
            Профиль
          </li>
          <li
            className={styles.item}
          >
            Выйти
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default ProfileModal;
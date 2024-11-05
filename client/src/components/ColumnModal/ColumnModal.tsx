import React from 'react';
import Modal from "react-modal";
import styles from './ColumnModule.module.scss'

type TProps = {
  isModalOpen: boolean
  closeModal: () => void
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1E1E1E',
    width: '400px',
    border: '1px solid #7e7e7e',
    boxShadow: '0px 5px 10px 2px rgba(49, 56, 61, 0.2)',
  },
};

Modal.setAppElement('#root')

const ColumnModal = (props: TProps) => {


  async function createDesk() {
    console.log(1)
  }

  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      overlayClassName={styles.overlay}
    >
      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        <h3 className={styles.heading}>New desk</h3>
        <div className={styles.formInputs}>
          <input type="text" className={styles.input} placeholder='Введите название'/>
          <div className={styles.buttonsWrap}>
            <button
              className={styles.createBtn}
              onClick={createDesk}
            >
              Добавить
            </button>
            <button
              className={styles.closeBtn}
              onClick={props.closeModal}
            >
              Отмена
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ColumnModal;
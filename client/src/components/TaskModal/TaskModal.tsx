import React from 'react';
import styles from './TaskModal.module.scss'
import TaskIcon from "../UI/Icons/TaskIcon.tsx";
import CloseIcon from "../UI/Icons/CloseIcon.tsx";
import DescriptionIcon from "../UI/Icons/DescriptionIcon.tsx";
import Modal from "react-modal";
import {TTask} from "../../models/TTask.ts";

type TProps = {
  isModalOpen: boolean
  columnTitle: string
  closeModal: () => void
  task: TTask
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
    width: '500px',
    border: '1px solid #7e7e7e',
    boxShadow: '0px 5px 10px 2px rgba(49, 56, 61, 0.2)',
  },
};

Modal.setAppElement('#root')

const TaskModal = (props: TProps) => {
  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      overlayClassName={styles.overlay}
    >
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.taskTitleWrap}>
            <TaskIcon/>
            <h3 className={styles.taskTitle}>{props.task.title}</h3>
          </div>
          <button className={styles.closeBtn} onClick={props.closeModal}>
            <CloseIcon/>
          </button>
        </div>
        <h4 className={styles.columnInfo}>В списке: <span>{props.columnTitle}</span></h4>
      </header>
      <main className={styles.columnMain}>
        <div>
          <div className={styles.descriptionHeaderWrap}>
            <div className={styles.descriptionHeaderWrapInfo}>
              <DescriptionIcon/>
              <h4 className={styles.descriptionHeader}>Описание</h4>
            </div>
            <button className={styles.changeDescriptionBtn}>Изменить</button>
          </div>
          <div className={styles.descriptionBody}>
            {props.task.description}
          </div>
        </div>
      </main>
    </Modal>
  );
};

export default TaskModal;
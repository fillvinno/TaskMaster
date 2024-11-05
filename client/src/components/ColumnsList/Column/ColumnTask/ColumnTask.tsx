import React, {useState} from 'react';
import styles from './ColumnTask.module.scss'
import TaskModal from "../../../TaskModal/TaskModal.tsx";
import {TTask} from "../../../../models/TTask.ts";

type TProps = {
  task: TTask
  columnTitle: string
}

const ColumnTask = (props: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  function openModal(): void {
    setIsModalOpen(true)
  }

  function closeModal(): void {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div
        onClick={openModal}
        className={styles.wrap}
      >
        {props.task.title}
      </div>
      <TaskModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        columnTitle={props.columnTitle}
        task={props.task}
      />
    </div>
  );
};

export default ColumnTask;
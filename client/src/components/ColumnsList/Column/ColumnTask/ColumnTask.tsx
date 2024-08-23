import React from 'react';
import styles from './ColumnTask.module.scss'

type TTask = {
  id: string
  title: string
  column: string
}

type TProps = {
  task: TTask
}

const ColumnTask = (props: TProps) => {
  return (
    <div className={styles.wrap}>
      {props.task.title}
    </div>
  );
};

export default ColumnTask;
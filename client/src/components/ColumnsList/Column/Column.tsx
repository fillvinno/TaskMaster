import React from 'react';
import styles from './Column.module.scss'
import {TColumn} from "../ColumnList.tsx";
import ColumnTask from "./ColumnTask/ColumnTask.tsx";

type TProps = {
  column: TColumn
}

const Column = (props: TProps) => {
  return (
    <div className={styles.wrap}>
      <h3>{props.column.title}</h3>
      <div className={styles.taskList}>
        {props.column.tasks.map(
          task => {
            return (
              <ColumnTask task={task}/>
            )
          }
        )}
      </div>
      <button className={styles.addTaskBtn}><span>+</span> Добавить задачу</button>
    </div>
  );
};

export default Column;
import React from 'react';
import styles from './ColumnList.module.scss'
import Column from "./Column/Column.tsx";

type TTask = {
  id: string
  title: string
}

export type TColumn = {
  id: string
  title: string
  tasks: TTask[]
}

type TProps = {
  columns: TColumn[]
}

const ColumnList = (props: TProps) => {
  return (
    <div className={styles.wrap}>
      {
        props.columns.map(el => {
          return (
            <Column key={el.id} column={el}/>
          )
        })
      }
      <button className={styles.addColumnBtn}>
        <span>+</span>
        Добавить колонку
      </button>
    </div>
  );
};

export default ColumnList;
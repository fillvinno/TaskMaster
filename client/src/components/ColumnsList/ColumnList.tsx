import React, {RefObject, useRef, useState} from 'react';
import styles from './ColumnList.module.scss'
import Column from "./Column/Column.tsx";
import useOutsideClick from "../../hooks/useOutsideClick.ts";

type TTask = {
  id: string
  title: string
  description: string
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
  const [isFormOpen, setFormOpen] = useState<boolean>(false)
  const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null)

  function openForm(): void {
    setFormOpen(true)
  }

  function closeForm(): void {
    isFormOpen && setFormOpen(false)
    console.log(1)
  }

  useOutsideClick([form, ], closeForm)

  function createColumn(): void {
    console.log('create')
  }

  return (
    <div className={styles.wrap}>
      {
        props.columns.map(el => {
          return (
            <Column key={el.id} column={el}/>
          )
        })
      }
      {
        isFormOpen
          ?
          <form
            className={styles.addColumnForm}
            onSubmit={e => e.preventDefault()}
            ref={form}
          >
            <h3 className={styles.newColumnHeading}>New collumn</h3>
            <textarea
              placeholder='Введите название'
              className={styles.columnName}
            >
            </textarea>
            <div className={styles.formBtns}>
              <button className={styles.formAddColumnBtn} onClick={createColumn}>Добавить</button>
              <button className={styles.formCancelBtn} onClick={closeForm}>Отмена</button>
            </div>
          </form>
          :
          <button className={styles.addColumnBtn} onClick={openForm}>
            <span>+</span>
            Добавить колонку
          </button>
      }
    </div>
  );
};

export default ColumnList;
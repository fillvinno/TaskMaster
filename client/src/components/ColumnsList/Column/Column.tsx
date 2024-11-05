import React, {RefObject, useEffect, useRef, useState} from 'react';
import styles from './Column.module.scss'
import {TColumn} from "../ColumnList.tsx";
import ColumnTask from "./ColumnTask/ColumnTask.tsx";
import useOutsideClick from "../../../hooks/useOutsideClick.ts";

type TProps = {
  column: TColumn
}

const Column = (props: TProps) => {
  const [isFormOpen, setFormOpen] = useState<boolean>(false)
  const textArea: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null)
  const column: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  useOutsideClick([textArea, column], closeForm)

  function openForm() {
    if (!isFormOpen) {
      setFormOpen(true)
    }
    textArea.current?.focus()
  }

  function closeForm() {
    isFormOpen && setFormOpen(false)
    console.log(123)
  }

  useEffect(() => {
    isFormOpen && openForm()
  }, [isFormOpen]);


  function createTask() {
    console.log('click')
  }

  return (
    <div className={styles.wrap} ref={column}>
      <h3>{props.column.title}</h3>
      <div className={styles.taskList}>
        {props.column.tasks.map(
          task => {
            return (
              <ColumnTask task={task} key={task.id} columnTitle={props.column.title}/>
            )
          }
        )}
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        {
          isFormOpen &&
            <textarea
                className={styles.addCardArea}
                placeholder='Введите название'
                ref={textArea}
            >
            </textarea>
        }
        <div className={styles.formBtns}>
          <button
            className={isFormOpen ? styles.addTaskBtnFormOpen : styles.addTaskBtn}
            onClick={
              isFormOpen
                ? createTask
                : openForm
            }
          >
            {isFormOpen ? null : <span>+</span>}
            {isFormOpen ? 'Добавить' : 'Добавить карточку'}
          </button>
          {isFormOpen ? <button className={styles.cancelTaskBtn} onClick={closeForm}>Отмена</button> : null}
        </div>
      </form>
    </div>
  );
};

export default Column;
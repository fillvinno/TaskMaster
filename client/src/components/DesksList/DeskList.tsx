import React, {useState} from 'react';
import styles from './DeskList.module.scss'
import DeskListItem from "./DeskListItem/DeskListItem.tsx";
import ColumnModal from "../ColumnModal/ColumnModal.tsx";

const testarr = [
  {
    id: 'sd23-d13e-132e-3eeq',
    title: 'azbyka'
  },
  {
    id: 'sd23-qwee-132e-3eeq',
    title: 'habyb'
  },
  {
    id: 'sd43-ds3e-3qae-3eeq',
    title: 'bebra'
  },
  {
    id: 'sd43-d13e-3qade-3eeq',
    title: 'bebra'
  },
  {
    id: 'sd43-d13a-3qae-3eeq',
    title: 'bebra'
  },
  {
    id: 'sd43-d1a3e-3qae-3eeq',
    title: 'bebra'
  },
  {
    id: 'sd43-d13ee-3qae-3eeq',
    title: 'bebra'
  },
  {
    id: 'sd43-d13e-3qa1e-3eeq',
    title: 'bebra'
  },
  {
    id: 'sd43-d13e-3qdae-3eeq',
    title: 'bebra'
  },
]
const favarr = [
  {
    id: 'sd43-d13e-ae-3eeq',
    title: 'bebra'
  },
  {
    id: 'sd43-d13e-3qae-3eeq',
    title: 'bebra'
  },
]

const DeskList = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)

  function openModal() {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.desks}>
        <h3>Избранное</h3>
        <div className={styles.favouritesDesks}>
          {
            favarr.map(el => {
              return (
                <DeskListItem key={el.id} title={el.title} favourites={true} id={el.id}/>
              )
            })
          }
        </div>
        <h3>Ваши доски</h3>
        <div className={styles.workDesks}>
          <button
            className={styles.addBtn}
            onClick={openModal}
          >
            +
          </button>
          <ColumnModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          />
          {
            testarr.map(el => {
              return (
                <DeskListItem key={el.id} title={el.title} id={el.id}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default DeskList;
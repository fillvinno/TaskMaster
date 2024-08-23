import React from 'react';
import styles from './DeskListItem.module.scss'
import star from '../../../assets/star.svg'
import StarIcon from "../../Icons/StarIcon.tsx";
import {Link} from "react-router-dom";

type TProps = {
  title: string
  id: string
  favourites?: boolean
}

const DeskListItem = (props: TProps) => {
  return (
    <Link to={`/${props.id}`} className={styles.wrap}>
      {props.title}
      {
        props.favourites &&
          <div className={styles.starIcon} style={{fill: "fff"}}>
            <StarIcon
              // isHovered={true}
              // onHover={() => {}}
              // onClick={() => {}}
            />
          </div>
      }
    </Link>
  );
};

export default DeskListItem;
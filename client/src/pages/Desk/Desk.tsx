import React from 'react';
import Navbar from "../../components/UI/Navbar/Navbar.tsx";
import styles from './Desk.module.scss'
import {useParams} from "react-router-dom";
import ColumnList from "../../components/ColumnsList/ColumnList.tsx";

const testDesk = {
  id: '1asd-d3add-g534aa-3123ff',
  title: 'Testovaya',
  columns: [{
    id: 'dasd-a23da-ggav-lpfa',
    title: 'Column1',
    tasks: [{
      id: 'gs4s-hr4vs-tgtc-lfom',
      title: 'Boba'
    },{
      id: 'g44s-hr4vs-tttc-lfom',
      title: 'Ggoba'
    },{
      id: 'g14s-hr4vs-tttc-lfom',
      title: 'ASDadsoba'
    }]
  },{
    id: 'dasd-ada-ggav-lpfa',
    title: 'Column2',
    tasks: [{
      id: 'gs4s-zzrvs-tnc-lfom',
      title: 'Gsba'
    }]
  },{
    id: 'dasd-ada-ggav-lpfa',
    title: 'Column3',
    tasks: [{
      id: 'gs4s-hhvs-tttc-lhom',
      title: 'Ngba'
    }]
  },],
  // tasks: [{
  //   id: 'aaxsd-dhed-g5ta-31mhff',
  //   title: 'yayt',
  //   column: 'hz'
  // },{
  //   id: 'amsd-ted-g5ta-3uyf',
  //   title: '5yee',
  //   column: 'hz'
  // },{
  //   id: 'agsd-dhyjd-gtta-31mff',
  //   title: 'hgr',
  //   column: 'hz'
  // },]
}

const Desk = () => {
  const params = useParams()
  console.log(params.id)

  return (
    <>
      <Navbar/>
      <div className={styles.wrap}>
        <h1>{testDesk.title}</h1>
        <ColumnList columns={testDesk.columns}/>
      </div>
    </>
  );
};

export default Desk;
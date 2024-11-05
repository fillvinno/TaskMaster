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
      title: 'Boba',
      description: 'lorem aldasd asdlasldas dasldasdasdas ldasdlasldalsdl asldlasdl lsadl adla ldadlaldlad laldlaldladl ladad ada ad daa aldadladlaldalda aal adl aldladladl'
    },{
      id: 'g44s-hr4vs-tttc-lfom',
      title: 'Ggoba',
      description: 'lorem aldasd asdlasldas dasldasdasdas ldasdlasldalsdl asldlasdl lsadl adla ldadlaldlad laldlaldladl ladad ada ad daa aldadladlaldalda aal adl aldladladl'
    },{
      id: 'g14s-hr4vs-tttc-lfom',
      title: 'ASDadsoba',
      description: 'lorem aldasd asdlasldas dasldasdasdas ldasdlasldalsdl asldlasdl lsadl adla ldadlaldlad laldlaldladl ladad ada ad daa aldadladlaldalda aal adl aldladladl'
    },{
      id: 'g14s-hr1s-tc-lfom',
      title: 'ИВЫsoba',
      description: 'lorem aldasd asdlasldas dasldasdasdas ldasdlasldalsdl asldlasdl lsadl adla ldadlaldlad laldlaldladl ladad ada ad daa aldadladlaldalda aal adl aldladladl'
    }]
  },{
    id: 'dasd-ada-ggav-lpfa',
    title: 'Column2',
    tasks: [{
      id: 'gs4s-zzrvs-tnc-lfom',
      title: 'Gsba',
      description: 'cvxcvxc sdffs lorem*10 adsasd asd asdas dasasdf;lpelpr eprl epodfn odf dfd fdofndofdof dn odon odfodnof d nodnofodnfodnfo dfodfon dnfo'
    }]
  },{
    id: 'dasd-ada1-ggav-lpfa',
    title: 'Column3',
    tasks: [{
      id: 'gs4s-hhvs-tttc-lhom',
      title: 'Ngba',
      description: 'd;al s;dla s;dasl d;asdlasmo damos dnaso daondias budasudb as daubd aubd audbadu abud bau dabud abud ajdosa jodaj ad jaodj aojd oajdo adojo'
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
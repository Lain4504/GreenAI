import React from "react";
import './body.css';
import Top from './TopSection/top'
import Information from './InformationSection/Information'
// import Activity from './ActivitySection/activity'
import { Collapse } from 'antd';
import AppFooter from "../Footer/Footer"
const { Panel } = Collapse;
const Body = () =>{
    return (
        <div className="mainContent">
            <Top/>
            <div className="bottom">
                <Information/>
            </div>
            <div className="block faqBlock">
            
            <div className="container-fluid">
            <h2>Tutorials</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dolor ut lacus interdum suscipit. Mauris non risus vel nisi lacinia fringilla ut ac lacus

</p>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="How to setup the theme?" key="1">
                        <p>Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.</p>
                    </Panel>
                    <Panel header="Can I change plan or cancel at any time?" key="2">
                        <p>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                    </Panel>
                    <Panel header="How to access through cloud?" key="3">
                        <p>Eu veritus ancillae suavitate per, cum in appellantur efficiantur. Eum cu clita ponderum lobortis, usu dicat exerci et, eam alii oblique interesset ea. Suas quidam volumus id eam, id populo euripidis temporibus pri. At eum quas putent iriure, fugit tritani sed ad. Per ad magna possim aliquam, est aeque exerci verear an, qui cu modus audire detraxit. Duo ne nostro rationibus, nam mutat omittam evertitur ad, meliore gubergren voluptatum at mel.</p>
                    </Panel>
                    
                </Collapse>
            </div>
        </div>
        <AppFooter/>
        </div>
    )
}
export default Body;
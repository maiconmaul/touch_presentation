import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import ActionButton from '../../../elements/ActionButton';
import BorderedImg from '../../../elements/BorderedImg';


import logo from '../../../assets/img/logo-psg.png'
// import complexoImg from '../../../assets/img/buildings/complexo-index.png'
import backButtonIcon from '../../../assets/img/backbutton.png'
// import arquitetosLogo from '../../../assets/img/konigsberger_vannucchi.png'
// import projetoProjeto from '../../../assets/img/buildings/projeto_projeto.png'
import projetoDatasheet from '../../../assets/img/millennium/projeto/dsmain.jpg'
import projetoDatasheetInfo0 from '../../../assets/img/millennium/projeto/ds0.png'
import projetoDatasheetInfo1 from '../../../assets/img/millennium/projeto/ds1.png'
import projetoDatasheetInfo2 from '../../../assets/img/millennium/projeto/ds2.png'
import projetoDatasheetInfo3 from '../../../assets/img/millennium/projeto/ds3.png'
import projetoDatasheetInfo4 from '../../../assets/img/millennium/projeto/ds4.png'

import './style.css'
import IdleTimer from '../../../elements/IdleTimer';

function MillenniumProjectPage() {
    let history = useHistory()
    const [index, setIndex] = useState(2)

    useEffect(() => {
        const timer = new IdleTimer({
            timeout: parseInt(process.env.REACT_APP_TIMEOUT_DURATION ?? "120"), //expire after 2 minutes
            onTimeout: () => {
                history.push("/videofull")
            }
        });
        return () => {
            timer.cleanUp();
        };
    });

    return (
        <div id="millennium-pageproject">
            <div className="top-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo Planeta" />
                </div>
                <div className="horizontal-line" />
                <button>
                    X
                </button>
            </div>
            <div className="horizontal-line half" />
            <div className="middle-container">
                <div className="vertical-line" />
                <main>
                    <div className="main-container">
                        {index === 2 ?
                            <div className="datasheet fade-in">
                                <div className="left">
                                    <img src={projetoDatasheetInfo0} alt=""/>
                                    <img src={projetoDatasheetInfo1} alt=""/>
                                    <img src={projetoDatasheetInfo2} alt=""/>
                                    <img src={projetoDatasheetInfo3} alt=""/>
                                    <img src={projetoDatasheetInfo4} alt=""/>
                                </div>
                                <div className="right">
                                    <BorderedImg img={projetoDatasheet} />
                                </div>
                            </div> :
                            <Fragment></Fragment>
                        }
                    </div>
                    <div className="buttons-container">
                        <ActionButton title="Ficha Técnica" extraClass={index === 2 ? "selected bounce-top" : "fade-in"} onClick={() => setIndex(2)} />
                    </div>
                </main>
                <div className="vertical-line" />
            </div>
            <div className="horizontal-line" />
            <footer>
                <button onClick={() => { history.goBack(); }}>
                    <img src={backButtonIcon} alt="" />
                    Voltar
                </button>
            </footer>
        </div>
    )
}

export default MillenniumProjectPage
import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import ActionButton from '../../elements/ActionButton';
import BorderedImg from '../../elements/BorderedImg';


import logo from '../../assets/img/logo-psg.png'
import complexoImg from '../../assets/img/buildings/complexo-index.png'
import backButtonIcon from '../../assets/img/backbutton.png'
import arquitetosLogo from '../../assets/img/konigsberger_vannucchi.png'
import projetoProjeto from '../../assets/img/buildings/projeto_projeto.png'
import projetoDatasheet from '../../assets/img/buildings/complexo-projeto_datasheet.png'
import projetoDatasheetInfo0 from '../../assets/img/complexo/projeto/datasheet-info0.png'
import projetoDatasheetInfo1 from '../../assets/img/complexo/projeto/datasheet-info1.png'
import projetoDatasheetInfo2 from '../../assets/img/complexo/projeto/datasheet-info2.png'
import projetoDatasheetInfo3 from '../../assets/img/complexo/projeto/datasheet-info3.png'
// import projetoDatasheetInfo4 from '../../assets/img/complexo/projeto/datasheet-info4.png'

import './style.css'
import IdleTimer from '../../elements/IdleTimer';

function ProjectPage() {
    let history = useHistory()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = new IdleTimer({
            timeout: parseInt(process.env.REACT_APP_TIMEOUT_DURATION ?? "120"), //expire after 10 seconds
            onTimeout: () => {
                history.push("/videofull")
            }
        });
        return () => {
            timer.cleanUp();
        };
    });

    return (
        <div id="pageproject">
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
                        {index === 0 ?
                            <div className="concept fade-in">
                                <div className="left">
                                    <h1>Um novo universo, infinitas possibilidades</h1>
                                    <p>
                                        Imagine a grandiosidade de um universo feito de inúmeras e extraordinárias conexões, onde todas elas estão materializadas ao seu redor. Na imponência de uma nova centralidade urbana. Nunca vista antes em Sorocaba, inspirada nas grandes metrópoles para elevar a vida cotidiana de uma cidade. Nela, a velha rotina dá lugar ao que realmente é novo e surpreendente. Onde cada oportunidade se apresenta da melhor forma, no seu devido lugar. Para que assim seja possível você viver de maneira única. Em família, profissionalmente e nos seus melhores momentos de descanso. Com total conforto e privacidade. Gigante, inovador e extremamente acolhedor. Para que, em todos os dias, você tenha o imenso prazer de viver à frente do seu tempo. Imaginou? <br />
                                        Melhor do que imaginar é nele viver.<br />
                                        Em casa, no trabalho ou no lazer.<br />
                                        Seja bem-vindo ao seu mundo novo.
                                    </p>
                                </div>
                                <div className="right">
                                    <img src={complexoImg} alt="" />
                                </div>
                            </div> :
                            <Fragment></Fragment>
                        }
                        {index === 1 ?
                            <div className="project fade-in">
                                <div className="left">
                                    <img src={arquitetosLogo} alt="" />
                                </div>
                                <div className="right">
                                    <BorderedImg img={projetoProjeto} />
                                </div>
                            </div> :
                            <Fragment></Fragment>
                        }
                        {index === 2 ?
                            <div className="datasheet fade-in">
                                <div className="left">
                                    <img src={projetoDatasheetInfo0} alt=""/>
                                    <img src={projetoDatasheetInfo1} alt=""/>
                                    <img src={projetoDatasheetInfo2} alt=""/>
                                    <img src={projetoDatasheetInfo3} alt=""/>
                                </div>
                                <div className="right">
                                    <BorderedImg img={projetoDatasheet} />
                                </div>
                            </div> :
                            <Fragment></Fragment>
                        }
                    </div>
                    <div className="buttons-container">
                        <ActionButton title="Conceito" extraClass={index === 0 ? "selected bounce-top" : "fade-in"} onClick={() => setIndex(0)} />
                        <ActionButton title="Projeto" extraClass={index === 1 ? "selected bounce-top" : "fade-in"} onClick={() => setIndex(1)} />
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

export default ProjectPage
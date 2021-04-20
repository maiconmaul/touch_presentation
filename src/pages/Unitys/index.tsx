import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import DefaultButton from '../../elements/DefaultButton'

import psgLogoDuoColor from '../../assets/img/psg-logo-duocolor.png'
import complexoImg from '../../assets/img/buildings/complexo-no-opacity.png'
import complexoOpaco from '../../assets/img/buildings/complexo-opaco.png'
import highlineImg1 from '../../assets/img/buildings/highline1.png'
import highlineImg2 from '../../assets/img/buildings/highline2.png'
import milleniumImg1 from '../../assets/img/buildings/millennium1.png'
import milleniumImg2 from '../../assets/img/buildings/millennium2.png'
import ellipseImg from '../../assets/img/buildings/ellipse-tower.png'

import backButtonIcon from '../../assets/img/backbutton.png'

import './style.css'
import IdleTimer from '../../elements/IdleTimer'

function UnitysPage() {
    const history = useHistory()

    const [index, setIndex] = useState(4)

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
    
    function delayFadeIn(delay: string) {
        return {
            "-webkit-animation": "fade-in 0s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
            "animation": "fade-in 0s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
            "animation-delay": `${delay}s`,
            "-webkit-animation-delay": `${delay}s`,
        }
    }


    function handleClick(index: number) {
        setIndex(index)
    }

    return (
        <Fragment>
            { index === 0 ?
                <Fragment>
                    <div className="horizontal-way-0 line-horizontal-grow" />
                    <div className="vertical-way-0-0" />
                    <div className="vertical-way-0-1" />
                    <div className="vertical-way-0-2" />
                    <div className="vertical-way-0-3" />
                </Fragment> :
                <Fragment></Fragment>
            }
            { index === 1 ?
                <Fragment>
                    <div className="horizontal-way-1 line-horizontal-grow" />
                    <div className="vertical-way-1-0" />
                </Fragment> :
                <Fragment></Fragment>
            }
            { index === 2 ?
                <div className="horizontal-way-2 line-horizontal-grow" /> :
                <Fragment></Fragment>
            }
            { index === 3 ?
                <div className="horizontal-way-3 line-horizontal-grow" /> :
                <Fragment></Fragment>
            }
            <div id="page-unitys">
                <div className="side-menu">
                    <div className="button-container">
                        <DefaultButton title="COMPLEXO" extraClass={index === 0 ? "selected" : "fade-in"} onClick={() => handleClick(0)} />
                        <DefaultButton title="ellipse tower" description="Torre Comercial" extraClass={index === 1 ? "selected" : "fade-in"} onClick={() => handleClick(1)} />
                        <DefaultButton title="highline" description="Apartamentos Residenciais de 55 a 110m²" extraClass={index === 2 ? "selected" : "fade-in"} onClick={() => handleClick(2)} />
                        <DefaultButton title="millennium" description="Apartamentos Residenciais de 127 a 201m²" extraClass={index === 3 ? "selected" : "fade-in"} onClick={() => handleClick(3)} />
                    </div>
                    <div className="logo-container">
                        <img src={psgLogoDuoColor} alt=""/>
                    </div>
                    <footer>
                        <button onClick={() => { history.goBack(); }}>
                            <img src={backButtonIcon} alt="" />
                        Voltar
                    </button>
                    </footer>
                </div>
                <div className="image-container">
                    <div>
                        <img src={complexoOpaco} className="opac" alt="Predios" />

                        {index === 0 ?
                            <Fragment>
                                {/* <img src={highlineImg1} style={delayFadeIn('2.1')} alt="Destaque" />
                                <img src={highlineImg2} style={delayFadeIn('2.1')} alt="Destaque" />
                                <img src={ellipseImg} style={delayFadeIn('2.1')} alt="Destaque" />
                                <img src={milleniumImg1} style={delayFadeIn('2.1')} alt="Destaque" />
                                <img src={milleniumImg2} style={delayFadeIn('2.1')} alt="Destaque" />
                                <img src={complexoImg} style={delayFadeIn('2.1')} alt="" /> */}
                                <img src={complexoImg} style={delayFadeIn('2.1')} alt="Destaque" />
                            </Fragment> : <Fragment></Fragment>
                        }
                        {index === 1 ?
                            <img src={ellipseImg} style={delayFadeIn('1.8')} alt="Destaque" /> : <Fragment></Fragment>
                        }
                        {index === 2 ?
                            <Fragment>
                                <img src={highlineImg1} style={delayFadeIn('0.2')} alt="Destaque" />
                                <img src={highlineImg2} style={delayFadeIn('0.8')} alt="Destaque" />
                            </Fragment> : <Fragment></Fragment>
                        }
                        {index === 3 ?
                            <Fragment>
                                <img src={milleniumImg1} style={delayFadeIn('1.2')} alt="Destaque" />
                                <img src={milleniumImg2} style={delayFadeIn('1.7')} alt="Destaque" />
                            </Fragment> : <Fragment></Fragment>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UnitysPage
import react, { useEffect, useState } from 'react'
import DefaultButton from '../../elements/DefaultButton'
// import Router from 'react-router'

import logo from '../../assets/img/logo-psg.png'
import complexoImg from '../../assets/img/buildings/complexo-index.png'
import maplocationIcon from '../../assets/img/placeholder.svg'
import checkedIcon from '../../assets/img/checked.svg'
import areaIcon from '../../assets/img/move.svg'
import bedIcon from '../../assets/img/bed.svg'

import './style.css'
import { useHistory } from "react-router-dom";


function Index() {
    const history = useHistory();
    var [timeOutRunning, setTimeOutRunning] = useState(false)
    
    function handleTimeout() {
        var time: NodeJS.Timeout;
        window.onload = resetTimer;
        
        document.onmousemove = resetTimer;
        document.onkeypress = resetTimer;
        function resetTimer() {
            console.log("Reset timer")
            clearTimeout(time);
            time = setTimeout(() =>{
                if (window.location.pathname != "/video"){
                    console.log("timeout")
                    setTimeOutRunning(true)
                    history.push("/video")
                }
            }, 10000)
        }
    };

    useEffect(() => {
        if (!timeOutRunning){
            handleTimeout()
        }
    })

    return (
        <div id="page-index">
            <div className="side-menu">
                <div className="logo-container">
                    <img src={logo} alt="Logo Planeta" />
                </div>
                <div className="button-container">
                    <DefaultButton title="COMPLEXO" link="/complexo"/>
                    <DefaultButton title="ellipse tower" description="Torre Comercial" />
                    <DefaultButton title="highline" description="Apartamentos Residenciais de 55 a 110m²" />
                    <DefaultButton title="millennium" description="Apartamentos Residenciais de 127 a 201m²" />
                </div>
                <div className="footer">
                    <div>
                        <div>
                            <img src={areaIcon} alt="" />
                            <p>
                                Residenciais: 55 A 201m²<br />
                                Comercial: 10 Lajes Corporativas
                            </p>
                        </div>
                        <div>
                            <img src={bedIcon} alt="" />
                            <p>1,2 E 3 Dorms | 3 A 4 Suites</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={maplocationIcon} alt="" />
                            <p>Portal Da Colina</p>
                        </div>
                        <div>
                            <img src={checkedIcon} alt="" />
                            <p>
                                Fase 1: Set/24 | Fase 2: <br />
                                Mar/25 | Fase 3: Mar/26
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <div>
                    <img src={complexoImg} alt="Predios" />
                </div>
            </div>
        </div>
    )
}

export default Index;
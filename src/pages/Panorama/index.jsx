import React, { useEffect } from 'react'
import { Pannellum } from "pannellum-react"
import { useHistory } from 'react-router'

import backButtonIcon from '../../assets/img/backbutton.png'
import myImage from '../../assets/img/panoramas/panorama03-25.jpg'

import './style.css'
import IdleTimer from '../../elements/IdleTimer';

function PanoramaPage(){
    let history = useHistory()

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
        <div id="panorama-page">
            <Pannellum
                width="100vw"
                height="100vh"
                image={myImage}
                autoLoad
                showZoomCtrl={false}
                showFullscreenCtrl={false}
                // previewTitle="Visão do terceiro andar"
            >        
            </Pannellum>
            <button onClick={() => { history.goBack()}}>
                <img src={backButtonIcon} alt=""/>
                Voltar
            </button>
        </div>
    )
}

export default PanoramaPage;
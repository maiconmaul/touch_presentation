import React from 'react'
import { Pannellum } from "pannellum-react"
import { useHistory } from 'react-router'

import backButtonIcon from '../../assets/img/backbutton.png'
import myImage from '../../assets/img/panoramas/panorama03-25.jpg'

import './style.css'

function PanoramaPage(){
    let history = useHistory()
    return (
        <div id="panorama-page">
            <Pannellum
                width="100vw"
                height="100vh"
                image={myImage}
                autoLoad
                showZoomCtrl={false}
                showFullscreenCtrl={false}
                previewTitle="Visão do terceiro andar"
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
import React from 'react'
import { useHistory } from 'react-router'

import './style.css'

import logo from '../../assets/img/logo-psg.png'
import video from '../../assets/videos/movie.mp4'
import backButtonIcon from '../../assets/img/backbutton.png'


function VideoPage() {
    let history = useHistory()
    return (
        <div id="pagevideo" className="fade-in-long">
            <div className="top-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo Planeta" />
                </div>
                <div className="horizontal-line" />
                <button>
                    X
                </button>
            </div>
            <div className="middle-container">
                <div className="vertical-line" />
                <main>
                    <span>Vídeo</span>  
                    <video src={video} typeof="video/mp4" className="fade-in-long" autoPlay loop muted/>
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

export default VideoPage
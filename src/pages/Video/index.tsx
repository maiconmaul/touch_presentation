import React from 'react'
import { useHistory } from 'react-router'

import './style.css'

import logo from '../../assets/img/logo-psg.png'
import video from '../../assets/videos/movie2.mp4'
import backButtonIcon from '../../assets/img/backbutton.png'


function VideoPage() {
    let history = useHistory()
    // useEffect(() => {
    //     document.onmousedown = () => {
    //         // history.goBack()
    //         document.onmousedown = null
    //     }
    // })
    return (
        <div id="pagevideo">
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
                    <video src={video} typeof="video/mp4" autoPlay loop muted/>
                </main>
                <div className="vertical-line" />
            </div>
            <div className="horizontal-line" />
            <footer>
                <button onClick={() => { history.goBack(); }}>
                <img src={backButtonIcon} alt="" />
                    Voltar ao Menu Principal
                </button>
            </footer>
        </div>
    )
}

export default VideoPage
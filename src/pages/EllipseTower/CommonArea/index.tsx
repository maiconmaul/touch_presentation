import { useEffect } from "react";
import { useHistory} from "react-router-dom";

import IdleTimer from "../../../elements/IdleTimer";

import logo from '../../../assets/img/logo-psg.png'
import backButtonIcon from '../../../assets/img/backbutton.png'
import highlineBoletario from '../../../assets/img/highline/areascomuns/highline-boletario.png'

import './style.css'
import ZoneButton from "../../../elements/ZoneButton";

function EllipseCommonAreasPage() {
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

        <div id="highline-commonarea-page" className="fade-in-long">
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
                    <img src={highlineBoletario} alt=""/>
                    <ZoneButton x={550} y={70} height={750} width={1150} onClick={() => history.push("/highline/areascomuns/galeria/99/0")} />
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

export default EllipseCommonAreasPage
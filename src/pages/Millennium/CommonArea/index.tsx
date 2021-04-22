import { useEffect } from "react";
import { useHistory} from "react-router-dom";

import IdleTimer from "../../../elements/IdleTimer";

import logo from '../../../assets/img/logo-psg.png'
import backButtonIcon from '../../../assets/img/backbutton.png'
import millenniumBoletario from '../../../assets/img/millennium/areascomuns/millennium-boletario.png'

import './style.css'
import ZoneButton from "../../../elements/ZoneButton";

function MillenniumCommonAreasPage() {
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

        <div id="millennium-commonarea-page" className="fade-in-long">
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
                    <img src={millenniumBoletario} alt=""/>
                    <ZoneButton x={800} y={10} height={860} width={570} onClick={() => history.push("/millennium/galeria/99/0")} />
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

export default MillenniumCommonAreasPage
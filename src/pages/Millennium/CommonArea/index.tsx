import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import IdleTimer from "../../../elements/IdleTimer";
import ZoneButton from "../../../elements/ZoneButton";

import logo from '../../../assets/img/logo-psg.png'
import backButtonIcon from '../../../assets/img/backbutton.png'
import millenniumBoletario from '../../../assets/img/millennium/areascomuns/boletario-millennium.png'
import placesMillenniumBoletario from '../../../assets/img/millennium/areascomuns/places-boletario-millennium.png'

import './style.css'

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
                    <div>
                        <div className="left">
                            <img src={placesMillenniumBoletario} alt=""/>
                        </div>
                        <div className="right">
                            <img src={millenniumBoletario} alt=""/>
                            {/* 01 */}
                            <ZoneButton x={610} y={355} height={50} width={100} rotate={-10} onClick={() => history.push("/millennium/galeria/99/0")}/>
                            {/* 02 */}
                            <ZoneButton x={155} y={620} height={70} width={210}/>
                            {/* 03 */}
                            <ZoneButton x={470} y={330} height={185} width={80} rotate={54} onClick={() => history.push("/millennium/galeria/99/1")}/>
                            {/* 03 */}
                            <ZoneButton x={720} y={280} height={75} width={110} rotate={-10} onClick={() => history.push("/millennium/galeria/99/3")}/>
                            {/* 04 */}
                            <ZoneButton x={380} y={465} height={60} width={60} rotate={55} onClick={() => history.push("/millennium/galeria/99/5")}/>
                            {/* 04 */}
                            <ZoneButton x={830} y={280} height={75} width={100} rotate={-10} onClick={() => history.push("/millennium/galeria/99/6")}/>
                            {/* 05 */}
                            <ZoneButton x={960} y={155} height={160} width={45} rotate={-10} onClick={() => history.push("/millennium/galeria/99/7")}/>
                            {/* 06 */}
                            <ZoneButton x={935} y={40} height={115} width={45} rotate={-10} onClick={() => history.push("/millennium/galeria/99/8")}/>
                            {/* 07 */}
                            <ZoneButton x={915} y={180} height={115} width={45} rotate={-10} onClick={() => history.push("/millennium/galeria/99/9")}/>
                            {/* 08 */}
                            <ZoneButton x={685} y={210} height={75} width={120} rotate={-10} onClick={() => history.push("/millennium/galeria/99/10")}/>
                            {/* 09 */}
                            <ZoneButton x={730} y={70} height={100} width={180} rotate={-10} onClick={() => history.push("/millennium/galeria/99/11")}/>
                            {/* 10 */}
                            <ZoneButton x={665} y={85} height={100} width={60} rotate={-10} onClick={() => history.push("/millennium/galeria/99/12")}/>
                            {/* 11 */}
                            <ZoneButton x={560} y={120} height={80} width={100} rotate={-10} onClick={() => history.push("/millennium/galeria/99/13")}/>
                            {/* 12 */}
                            <ZoneButton x={425} y={140} height={70} width={130} rotate={-10} onClick={() => history.push("/millennium/galeria/99/14")}/>
                            {/* 13 */}
                            <ZoneButton x={560} y={200} height={150} width={120} rotate={-25} onClick={() => history.push("/millennium/galeria/99/15")}/>
                            {/* 14 */}
                            <ZoneButton x={450} y={270} height={120} width={80} rotate={54} onClick={() => history.push("/millennium/galeria/99/16")}/>
                            {/* 15 */}
                            <ZoneButton x={270} y={180} height={220} width={80} rotate={53} onClick={() => history.push("/millennium/galeria/99/17")}/>
                            {/* 16 */}
                            <ZoneButton x={300} y={390} height={80} width={40} rotate={55} onClick={() => history.push("/millennium/galeria/99/18")}/>
                            {/* 17 */}
                            <ZoneButton x={335} y={500} height={60} width={60} rotate={55} onClick={() => history.push("/millennium/galeria/99/19")}/>
                            {/* 18 */}
                            <ZoneButton x={190} y={510} height={50} width={170} rotate={55} onClick={() => history.push("/millennium/galeria/99/20")}/>
                            {/* 19 */}
                            <ZoneButton x={190} y={540} height={50} width={100} rotate={55} onClick={() => history.push("/millennium/galeria/99/21")}/>
                            {/* 20 */}
                            <ZoneButton x={120} y={260} height={280} width={70} rotate={20} onClick={() => history.push("/millennium/galeria/99/22")}/>
                            {/* 21 */}
                            <ZoneButton x={25} y={430} height={70} width={70} rotate={20} onClick={() => history.push("/millennium/galeria/99/23")}/> 
                            {/* 22 */}
                            <ZoneButton x={40} y={520} height={100} width={120} onClick={() => history.push("/millennium/galeria/99/24")}/>
                        </div>
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

export default MillenniumCommonAreasPage
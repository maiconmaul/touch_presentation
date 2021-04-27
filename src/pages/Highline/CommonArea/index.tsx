import { useEffect } from "react";
import { useHistory} from "react-router-dom";

import IdleTimer from "../../../elements/IdleTimer";

import logo from '../../../assets/img/logo-psg.png'
import backButtonIcon from '../../../assets/img/backbutton.png'
import highlineBoletario from '../../../assets/img/highline/areascomuns/highline-boletario.png'

import './style.css'
import ZoneButton from "../../../elements/ZoneButton";

function HighlineCommonAreasPage() {
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
                    {/* 01 */}
                    <ZoneButton x={1150} y={660} height={60} width={100} onClick={() => history.push("/highline/areascomuns/galeria/99/0")} />
                    {/* 02 */}
                    <ZoneButton x={1535} y={470} height={220} width={80} onClick={() => history.push("/highline/areascomuns/galeria/99/1")} />
                    {/* 03 */}
                    <ZoneButton x={1250} y={635} height={60} width={165} onClick={() => history.push("/highline/areascomuns/galeria/99/2")} />
                    {/* 04 */}
                    <ZoneButton x={1415} y={635} height={60} width={120} onClick={() => history.push("/highline/areascomuns/galeria/99/3")} />
                    {/* 05 */}
                    <ZoneButton x={1415} y={490} height={145} width={120} onClick={() => history.push("/highline/areascomuns/galeria/99/4")} />
                    {/* 06 */}
                    <ZoneButton x={1275} y={560} height={75} width={140} onClick={() => history.push("/highline/areascomuns/galeria/99/5")} />
                    {/* 07 */}
                    <ZoneButton x={1170} y={550} height={85} width={100} onClick={() => history.push("/highline/areascomuns/galeria/99/6")} />
                    {/* 08 */}
                    <ZoneButton x={1250} y={450} height={95} width={130} onClick={() => history.push("/highline/areascomuns/galeria/99/8")} />
                    {/* 09 */}
                    <ZoneButton x={1180} y={325} height={110} width={180} onClick={() => history.push("/highline/areascomuns/galeria/99/9")} />
                    {/* 10 */}
                    <ZoneButton x={1380} y={325} height={110} width={150} onClick={() => history.push("/highline/areascomuns/galeria/99/10")} />
                    {/* 11 */}
                    <ZoneButton x={1540} y={325} height={110} width={150} onClick={() => history.push("/highline/areascomuns/galeria/99/11")} />
                    {/* 12 */}
                    <ZoneButton x={960} y={500} height={310} width={75} rotate={36}  onClick={() => history.push("/highline/areascomuns/galeria/99/12")} />
                    {/* 13 */}
                    <ZoneButton x={800} y={650} height={30} width={75} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/13")} />
                    {/* 14 */}
                    <ZoneButton x={875} y={490} height={150} width={75} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/14")} />
                    {/* 15 */}
                    <ZoneButton x={800} y={440} height={80} width={130} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/15")} />
                    {/* 16 */}
                    <ZoneButton x={860} y={420} height={40} width={100} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/16")} />
                    {/* 17 */}
                    <ZoneButton x={950} y={300} height={120} width={120} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/17")} />
                    {/* 18 */}
                    <ZoneButton x={710} y={460} height={60} width={90} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/18")} />
                    {/* 19 */}
                    <ZoneButton x={715} y={335} height={120} width={120} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/19")} />
                    {/* 20 */}
                    <ZoneButton x={647} y={415} height={50} width={80} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/20")} />
                    {/* 21 */}
                    <ZoneButton x={610} y={375} height={50} width={50} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/21")} />
                    {/* 22 */}
                    <ZoneButton x={652} y={280} height={120} width={80} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/22")} />
                    {/* 23 */}
                    <ZoneButton x={615} y={200} height={200} width={55} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/23")} />
                    {/* 24 */}
                    <ZoneButton x={715} y={165} height={120} width={230} rotate={35}  onClick={() => history.push("/highline/areascomuns/galeria/99/24")} />
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

export default HighlineCommonAreasPage
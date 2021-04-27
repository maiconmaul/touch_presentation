import { useEffect } from 'react'
import { useHistory } from "react-router-dom";

// import { FullScreen, useFullScreenHandle } from "react-full-screen";

import DefaultButton from '../../elements/DefaultButton'
import IdleTimer from '../../elements/IdleTimer'

import logo from '../../assets/img/logo-psg.png'
import complexoImg from '../../assets/img/buildings/complexo-index.png'
// import maplocationIcon from '../../assets/img/placeholder.svg'
// import checkedIcon from '../../assets/img/checked.svg'
// import areaIcon from '../../assets/img/move.svg'
// import bedIcon from '../../assets/img/bed.svg'
import complexoBuildingProgressive from '../../assets/img/complexo-building-progressive.jpg'
import complexoBuilding from '../../assets/img/fachada/complexo-building.jpg'

import locationPage from '../../assets/img/location-page.png'

import './style.css'

function Index() {
    const history = useHistory()

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
    
    function handleDestination(dest: string) {
        if (dest !== "" && dest !== undefined && dest !== " ") {
            history.push(dest)
        }
    }
    
    console.log(locationPage)
    console.log(complexoBuildingProgressive)
    console.log(complexoBuilding)

    return (
        <div id="page-index" className="fade-in">
            <div className="side-menu">
                <div className="logo-container">
                    <img src={logo} alt="Logo Planeta" />
                </div>
                <div className="button-container">
                    <DefaultButton title="COMPLEXO" onClick={() => handleDestination("/complexo")} />
                    <DefaultButton title="ELLIPSE TOWER" description="Torre Comercial" onClick={() => handleDestination("/ellipse")}/>
                    <DefaultButton title="HIGHLINE" description="Apartamentos Residenciais de 55 a 110m²" onClick={() => handleDestination("/highline")} />
                    <DefaultButton title="MILLENNIUM" description="Apartamentos Residenciais de 127 a 201m²" onClick={() => handleDestination("/millennium")}/>
                </div>
                {/* <div className="footer">
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
                </div> */}
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
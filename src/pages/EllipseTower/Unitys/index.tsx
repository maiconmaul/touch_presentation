import { useState } from "react";
import { useHistory } from "react-router-dom";

import logo from '../../../assets/img/logo-psg.png'
import backButtonIcon from '../../../assets/img/backbutton.png'
import apto55 from '../../../assets/img/highline/unidades/apto55.png'
import apto78 from '../../../assets/img/highline/unidades/apto78.png'
import apto79 from '../../../assets/img/highline/unidades/apto79.png'
import apto106 from '../../../assets/img/highline/unidades/apto106.png'

import ActionButton from "../../../elements/ActionButton";

import './style.css'
import ZoneButton from "../../../elements/ZoneButton";

function HighlineUnitysPage() {
    let history = useHistory()

    const [selectedIndex, setSelectedIndex] = useState(0)

    const unitys = [
        {
            name: "Apto 55 a 62m²"
        },
        {
            name: "Apto 78 a 85m²"
        },
        {
            name: "Apto 79 a 85m²"
        },
        {
            name: "Apto 106 a 110m²"
        }
    ]

    function handleSelection(index: number) {
        setSelectedIndex(index)
    }

    return (
        <div id="highline-unitys-page" className="fade-in-long">
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
                    <div className="left">
                        {
                            unitys.map((unity, index) => {
                                return (
                                    <ActionButton key={unity.name} title={unity.name} extraClass={selectedIndex === index ? "selected" : ""} onClick={() => handleSelection(index)} />
                                )
                            })
                        }
                    </div>
                    <div className="right">
                        {
                            selectedIndex === 0 ?
                                <>

                                    <div className="image-container">
                                        <img src={apto55} alt="" />
                                        <ZoneButton x={460} y={280} height={300} width={340}/> {/* sala */}
                                        <ZoneButton x={200} y={580} height={200} width={280}/> {/* varanda */}
                                        <ZoneButton x={200} y={300} height={280} width={260}/> {/* suite */}
                                        {/* <ZoneButton x={200} y={300} height={330} width={320}/> */}
                                    </div>
                                    <div className="text-container">
                                        <span>1 SUÍTE COM LAVABO SOCIAL</span>
                                    </div>
                                </> :
                                <></>
                        }
                        {
                            selectedIndex === 1 ?
                                <>

                                    <div className="image-container">
                                        <img src={apto78} alt="" />
                                        <ZoneButton x={180} y={320} height={270} width={280} onClick={() => history.push("/highline/areascomuns/galeria/1/0")} />
                                        <ZoneButton x={180} y={590} height={190} width={290} onClick={() => history.push("/highline/areascomuns/galeria/1/1")} />
                                        <ZoneButton x={600} y={10} height={330} width={300} onClick={() => history.push("/highline/areascomuns/galeria/1/2")} />
                                    </div>
                                    <div className="text-container">
                                        <span>2 DORMITÓRIOS C/ 1 SUÍTE</span>
                                    </div>
                                </> :
                                <></>
                        }
                        {
                            selectedIndex === 2 ?
                                <>

                                    <div className="image-container">
                                        <img src={apto79} alt="" />
                                        <ZoneButton x={20} y={180} height={410} width={320} /> {/* suite */}
                                        <ZoneButton x={615} y={590} height={190} width={290} /> {/* varanda */}
                                        <ZoneButton x={610} y={270} height={310} width={300} onClick={() => history.push("/highline/areascomuns/galeria/2/0")} /> {/* sala */}
                                    </div>
                                    <div className="text-container">
                                        <span>2 DORMITÓRIOS C/ 1 SUÍTE</span>
                                    </div>
                                </> :
                                <></>
                        }
                        {
                            selectedIndex === 3 ?
                                <>

                                    <div className="image-container">
                                        <img src={apto106} alt="" />
                                        <ZoneButton x={200} y={280} height={260} width={430} onClick={() => history.push("/highline/areascomuns/galeria/3/0")} /> {/* sala */}
                                        <ZoneButton x={200} y={540} height={170} width={430} onClick={() => history.push("/highline/areascomuns/galeria/3/1")} /> {/* vranda */}
                                        <ZoneButton x={635} y={380} height={260} width={260} onClick={() => history.push("/highline/areascomuns/galeria/3/3")} /> {/* quartp */}
                                    </div>
                                    <div className="text-container">
                                        <span>3 DORMITÓRIOS C/ 1 SUÍTE</span>
                                    </div>
                                </> :
                                <></>
                        }
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

export default HighlineUnitysPage
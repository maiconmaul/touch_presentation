import { useState } from "react";
import { useHistory } from "react-router-dom";

import logo from '../../../assets/img/logo-psg.png'
import backButtonIcon from '../../../assets/img/backbutton.png'
import apto127 from '../../../assets/img/millennium/unidades/apto127.png'
import apto192 from '../../../assets/img/millennium/unidades/apto192.png'

import ActionButton from "../../../elements/ActionButton";
import ZoneButton from "../../../elements/ZoneButton";

import './style.css'

function MillenniumUnitysPage() {
    let history = useHistory()

    const [selectedIndex, setSelectedIndex] = useState(1)

    const unitys = [
        {
            name: "Apto 127 a 133m²"
        },
        {
            name: "Apto 192 a 201m²"
        }
    ]

    function handleSelection(index: number) {
        setSelectedIndex(index)
    }

    return (
        <div id="millennium-unitys-page" className="fade-in-long">
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
                                        <img src={apto127} alt="" />
                                        <ZoneButton x={200} y={290} height={230} width={400} onClick={() => history.push("/millennium/galeria/0/0")} /> {/* sala */}
                                        <ZoneButton x={200} y={520} height={180} width={400} onClick={() => history.push("/millennium/galeria/0/2")} /> {/* varanda */}
                                        <ZoneButton x={790} y={80} height={240} width={500} onClick={() => history.push("/millennium/galeria/0/3")} /> {/* suite */}
                                    </div>
                                    <div className="text-container">
                                        <span>3 SUÍTES</span>
                                    </div>
                                </> :
                                <></>
                        }
                        {
                            selectedIndex === 1 ?
                                <>

                                    <div className="image-container">
                                        <img src={apto192} alt="" />
                                        <ZoneButton x={0} y={300} height={350} width={220} onClick={() => history.push("/millennium/galeria/1/0")} /> {/* sala */}
                                        <ZoneButton x={490} y={0} height={300} width={180} onClick={() => history.push("/millennium/galeria/1/3")} /> {/* suite */}
                                        <ZoneButton x={250} y={650} height={130} width={310} onClick={() => history.push("/millennium/galeria/1/2")} /> {/* varanda */}
                                        <ZoneButton x={220} y={450} height={200} width={340} onClick={() => history.push("/millennium/galeria/1/4")} /> {/* cozinha */}
                                    </div>
                                    <div className="text-container">
                                        <span>3 OU 4 SUÍTES</span>
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

export default MillenniumUnitysPage
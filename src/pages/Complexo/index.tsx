import react, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'


import IdleTimer from '../../elements/IdleTimer'


import logo from '../../assets/img/logo-psg.png'
import videoIcon from '../../assets/img/video.png'
import projectIcon from '../../assets/img/project.png'
import commonAreasIcon from '../../assets/img/common-areas.png'
import unitsIcon from '../../assets/img/units.png'
import locationIcon from '../../assets/img/location.png'
import tourVirtualIcon from '../../assets/img/tour-virtual.png'
import backButtonIcon from '../../assets/img/backbutton.png'
import complexoBuilding from '../../assets/img/complexo-building.jpg'
import ImageButton from '../../elements/ImageButton'


import './style.css'

function ComplexoIndex() {
    let history = useHistory()

    const [isTimeout, setIsTimeout] = useState(false)

    useEffect(() => {
        const timer = new IdleTimer({
          timeout: 120, //expire after 10 seconds
          onTimeout: () => {
            console.log("expired")
            setIsTimeout(true);
            history.push("/video")
          }
        });
    
        return () => {
          timer.cleanUp();
        };
      }, []);

    return (
        <div id="page-complexo-index">
            <div className="side-menu">
                <div className="logo-container">
                    <img src={logo} alt="Logo Planeta" />
                </div>
                <div className="button-container">
                    <ImageButton title="Vídeo" image={videoIcon}/>
                    <ImageButton title="Projeto" image={projectIcon}/>
                    <ImageButton title="Áreas Comuns" image={commonAreasIcon}/>
                    <ImageButton title="Unidades" image={unitsIcon}/>
                    <ImageButton title="Localização" image={locationIcon}/>
                    <ImageButton title="Tour Virtual" image={tourVirtualIcon} border={true}/>
                </div>
                <div className="footer">
                    <button onClick={() => { history.goBack()}}>
                        <img src={backButtonIcon} alt=""/>
                        Voltar ao Menu Principal
                    </button>
                </div>
            </div>
            <div className="image-container">
                <img src={complexoBuilding} alt=""/>
            </div>
        </div>
    )
}

export default ComplexoIndex;
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


import IdleTimer from '../../elements/IdleTimer'


import logo from '../../assets/img/logo-psg.png'
import videoIcon from '../../assets/img/video.png'
import projectIcon from '../../assets/img/project.png'
import commonAreasIcon from '../../assets/img/common-areas.png'
import unitsIcon from '../../assets/img/units.png'
import locationIcon from '../../assets/img/location.png'
import tourVirtualIcon from '../../assets/img/tour-virtual.png'
import backButtonIcon from '../../assets/img/backbutton.png'
// import complexoBuildingProgressive from '../../assets/img/complexo-building-progressive.jpg'
import complexoBuilding from '../../assets/img/fachada/complexo-building.jpg'
import ImageButton from '../../elements/ImageButton'


import './style.css'

function ComplexoIndex() {
    let history = useHistory()

    // const [isTimeout, setIsTimeout] = useState(false)

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
        <div id="page-complexo-index" className="fade-in">
            <div className="side-menu">
                <div className="logo-container">
                    <img src={logo} alt="Logo Planeta"/>
                </div>
                <div className="button-container">
                    <ImageButton title="Vídeo" image={videoIcon} extraClass="slide-right" link="/video"/>
                    <ImageButton title="Projeto" image={projectIcon} extraClass="slide-left" link="/complexo/projeto"/>
                    <ImageButton title="Áreas Comuns" image={commonAreasIcon} extraClass="slide-right" link="/areascomuns"/>
                    <ImageButton title="Condomínios" image={unitsIcon} extraClass="slide-left" link="/unidades"/>
                    <ImageButton title="Localização" image={locationIcon} extraClass="slide-right" link="/localizacao"/>
                    <ImageButton title="Tour Virtual" image={tourVirtualIcon} border={true} extraClass="slide-left" link="/tour-virtual"/>
                </div>
                <div className="footer">
                    <button onClick={() => { history.goBack()}}>
                        <img src={backButtonIcon} alt=""/>
                        Voltar ao Menu Principal
                    </button>
                </div>
            </div>
            <div className="image-container">
                <img src={complexoBuilding} className="teste fade-in" alt=""/>
            </div>
        </div>
    )
}

export default ComplexoIndex;
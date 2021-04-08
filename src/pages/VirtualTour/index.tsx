import { useHistory } from 'react-router'
import backButtonIcon from '../../assets/img/backbutton.png'

import './style.css'

function VirtualTourPage(){
    const history = useHistory()

    return(
        <div id="tour-virtua-page">
            <iframe src="https://rd3space.com/rd3viewer/planeta/?target=Maquete3D" title="maquete"></iframe>
            <button onClick={() => { history.goBack()}}>
                <img src={backButtonIcon} alt=""/>
                Voltar
            </button>
        </div>
    )
}

export default VirtualTourPage;
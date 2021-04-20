import { useEffect } from 'react';
import { useHistory } from 'react-router'
import backButtonIcon from '../../assets/img/backbutton.png'
import IdleTimer from '../../elements/IdleTimer';

import './style.css'

function VirtualTourPage(){
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

    return(
        <div id="tour-virtua-page">
            <iframe src="https://rd3space.com/rd3viewer/construtoraplaneta/?target=Maquete3D" title="maquete"></iframe>
            <button onClick={() => { history.goBack()}}>
                <img src={backButtonIcon} alt=""/>
                Voltar
            </button>
        </div>
    )
}

export default VirtualTourPage;
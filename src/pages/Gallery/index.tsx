import { useHistory } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

import backButtonIcon from '../../assets/img/backbutton.png'
import './style.css'
import "./carousel.min.css";


function GalleryPage(){
    let history = useHistory()
    return(
        <div id="galeria">
            <Carousel emulateTouch infiniteLoop showThumbs={false}>
                <div>
                    <img src="https://images.wallpaperscraft.com/image/road_marking_bridge_123398_1280x720.jpg" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.wallpaperscraft.com/image/car_neon_man_137624_1280x720.jpg" alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.wallpaperscraft.com/image/matrix_code_numbers_147523_1280x720.jpg" alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> 

            <button onClick={() => { history.goBack()}}>
                <img src={backButtonIcon} alt=""/>
                Voltar
            </button>
        </div>
    )
}

export default GalleryPage
import { useHistory } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

import backButtonIcon from '../../assets/img/backbutton.png'
import complex1 from '../../assets/img/gallery/complexo-01.jpg'
import complexo1 from '../../assets/img/gallery/complexo-01.jpg'
import complexo2 from '../../assets/img/gallery/complexo-02.jpg'
import complexo3 from '../../assets/img/gallery/complexo-03.jpg'
import subsolo1 from '../../assets/img/gallery/subsolo-01.jpg'
import subsolo2 from '../../assets/img/gallery/subsolo-02.jpg'
import subsolo3 from '../../assets/img/gallery/subsolo-03.jpg'

import './style.css'
import "./carousel.min.css";


function GalleryPage() {
    let { goBack } = useHistory()

    const images = [
        {
            path: '../../assets/img/gallery/complexo-01.jpg',
            name: 'Praça Central'
        },
        {
            path: '../../assets/img/gallery/complexo-02.jpg',
            name: 'Mall'
        },
        {
            path: '../../assets/img/gallery/complexo-03.jpg',
            name: 'Entrada de Veículos'
        },
        {
            path: '../../assets/img/gallery/subsolo-01.jpg',
            name: 'Subsolo 01'
        },
        {
            path: '../../assets/img/gallery/subsolo-02.jpg',
            name: 'Subsolo 02'
        },
        {
            path: '../../assets/img/gallery/subsolo-03.jpg',
            name: 'Subsolo 03'
        }
    ]

    return (
        <div id="galeria">
            <Carousel emulateTouch infiniteLoop showThumbs={false} autoPlay={false} >
                <div>
                    <img src={complexo1} alt="" />
                    <p className="legend">Praça Central</p>
                </div>
                <div>
                    <img src={complexo2} alt="" />
                    <p className="legend">Mall</p>
                </div>
                <div>
                    <img src={complexo3} alt="" />
                    <p className="legend">Entrada de Veículos</p>
                </div>
                <div>
                    <img src={subsolo1} alt="" />
                    <p className="legend">Subsolo 01</p>
                </div>
                <div>
                    <img src={subsolo2} alt="" />
                    <p className="legend">Subsolo 02</p>
                </div>
                <div>
                    <img src={subsolo3} alt="" />
                    <p className="legend">Subsolo 03</p>
                </div>
            </Carousel>

            <button onClick={() => { goBack() }}>
                <img src={backButtonIcon} alt="" />
                Voltar
            </button>
        </div>
    )
}

export default GalleryPage
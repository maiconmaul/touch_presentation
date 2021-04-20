import { useHistory } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import logo from '../../assets/img/logo-psg.png'

import backButtonIcon from '../../assets/img/backbutton.png'

import complexo1 from '../../assets/img/gallery/complexo-01.jpg'
import complexo2 from '../../assets/img/gallery/complexo-02.jpg'
import complexo3 from '../../assets/img/gallery/complexo-03.jpg'
import subsolo1 from '../../assets/img/gallery/subsolo-01.jpg'
import subsolo2 from '../../assets/img/gallery/subsolo-02.jpg'
import subsolo3 from '../../assets/img/gallery/subsolo-03.jpg'

import leftArrow from '../../assets/img/left-arrow.svg'
import rightArrow from '../../assets/img/right-arrow.svg'

import './style.css'
import "./carousel.min.css";
import { useState } from "react";
import ActionButton from "../../elements/ActionButton";

interface SlideImages {
    path: string
    name: string
}

interface DictionarySlide {
    [key: string]: Array<SlideImages>
}

function CommonAreasPage() {
    let { goBack } = useHistory()

    const [currentSlide, setCurrentSlide] = useState(0)
    const [index, setIndex] = useState(0)

    const imagesDict2: DictionarySlide = {
        '0': [{
            path: complexo1,
            name: 'Praça Central'
        }, {
            path: complexo2,
            name: 'Mall'
        }, {
            path: complexo3,
            name: 'Entrada de Veículos'
        }],
        '1': [{
            path: subsolo1,
            name: 'Subsolo 01'
        }, {
            path: subsolo2,
            name: 'Subsolo 02'
        }, {
            path: subsolo3,
            name: 'Subsolo 03'
        }]
    }

    function next() {
        setCurrentSlide(currentSlide + 1)
    }

    function prev() {
        setCurrentSlide(currentSlide - 1)
    }

    function updateCurrentSlide(index: number) {
        console.log(index)
        if (currentSlide !== index) {
            setCurrentSlide(index);
        }
    }

    return (

        <div id="commonareas-page" className="fade-in-long">
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
                    <button onClick={prev}>
                        <img src={leftArrow} alt="" />
                    </button>
                    <div>
                        <Carousel onChange={updateCurrentSlide} selectedItem={currentSlide} emulateTouch infiniteLoop showThumbs={false} showArrows={false} showStatus={false} autoPlay={false} swipeScrollTolerance={3}>
                            {
                                imagesDict2[index].map((image: SlideImages) => {
                                    return (
                                        <div key={image.path}>
                                            <img src={image.path} alt="" />
                                            <p className="legend">{image.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <button onClick={next}>
                        <img src={rightArrow} alt="" />
                    </button>
                    <div className="buttom-container">
                        <ActionButton title="Praça" extraClass={index === 0 ? "selected bounce-top" : "fade-in"} onClick={() => setIndex(0)} />
                        <ActionButton title="Sub Solo" extraClass={index === 1 ? "selected bounce-top" : "fade-in"} onClick={() => setIndex(1)} />
                    </div>
                    <div className="thumb-container-parent">
                        <div className="thumb-container-child">
                            {
                                imagesDict2[index].map((image: SlideImages, index) => {
                                    return (
                                        <div key={image.path}>
                                            <img src={image.path} alt="" onClick={() => updateCurrentSlide(index)} className={index === currentSlide ? "selected" : ""}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
                <div className="vertical-line" />
            </div>
            <div className="horizontal-line" />
            <footer>
                <button onClick={() => { goBack(); }}>
                    <img src={backButtonIcon} alt="" />
                    Voltar ao Menu Principal
                </button>
            </footer>
        </div>
    )
}

export default CommonAreasPage
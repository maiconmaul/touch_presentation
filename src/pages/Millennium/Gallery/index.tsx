import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import logo from '../../../assets/img/logo-psg.png'

import backButtonIcon from '../../../assets/img/backbutton.png'


import millennium1 from '../../../assets/img/millennium/areascomuns/1.jpg'
import millennium30 from '../../../assets/img/millennium/areascomuns/3_0.jpg'
import millennium31 from '../../../assets/img/millennium/areascomuns/3_1.jpg'
import millennium32 from '../../../assets/img/millennium/areascomuns/3_2.jpg'
import millennium33 from '../../../assets/img/millennium/areascomuns/3_3.jpg'
import millennium40 from '../../../assets/img/millennium/areascomuns/4_0.jpg'
import millennium41 from '../../../assets/img/millennium/areascomuns/4_1.jpg'
import millennium5 from '../../../assets/img/millennium/areascomuns/5.jpg'
import millennium6 from '../../../assets/img/millennium/areascomuns/6.jpg'
import millennium7 from '../../../assets/img/millennium/areascomuns/7.jpg'
import millennium8 from '../../../assets/img/millennium/areascomuns/8.jpg'
import millennium9 from '../../../assets/img/millennium/areascomuns/9.jpg'
import millennium10 from '../../../assets/img/millennium/areascomuns/10.jpg'
import millennium11 from '../../../assets/img/millennium/areascomuns/11.jpg'
import millennium12 from '../../../assets/img/millennium/areascomuns/12.jpg'
import millennium13 from '../../../assets/img/millennium/areascomuns/13.jpg'
import millennium14 from '../../../assets/img/millennium/areascomuns/14.jpg'
import millennium15 from '../../../assets/img/millennium/areascomuns/15.jpg'
import millennium16 from '../../../assets/img/millennium/areascomuns/16.jpg'
import millennium17 from '../../../assets/img/millennium/areascomuns/17.jpg'
import millennium18 from '../../../assets/img/millennium/areascomuns/18.jpg'
import millennium19 from '../../../assets/img/millennium/areascomuns/19.jpg'
import millennium20 from '../../../assets/img/millennium/areascomuns/20.jpg'
import millennium21 from '../../../assets/img/millennium/areascomuns/21.jpg'
import millennium22 from '../../../assets/img/millennium/areascomuns/22.jpg'

import millenniumU000 from '../../../assets/img/millennium/unidades/apto127-00.jpg'
import millenniumU001 from '../../../assets/img/millennium/unidades/apto127-01.jpg'
import millenniumU01 from '../../../assets/img/millennium/unidades/apto127-1.jpg'
import millenniumU02 from '../../../assets/img/millennium/unidades/apto127-2.jpg'

import millenniumU100 from '../../../assets/img/millennium/unidades/apto192-00.jpg'
import millenniumU101 from '../../../assets/img/millennium/unidades/apto192-01.jpg'
import millenniumU11 from '../../../assets/img/millennium/unidades/apto192-1.jpg'
import millenniumU12 from '../../../assets/img/millennium/unidades/apto192-2.jpg'
import millenniumU13 from '../../../assets/img/millennium/unidades/apto192-3.jpg'


import leftArrow from '../../../assets/img/left-arrow.svg'
import rightArrow from '../../../assets/img/right-arrow.svg'

import './style.css'
import "./carousel.min.css";
import IdleTimer from "../../../elements/IdleTimer";

interface RouteParams {
    id: string
    index: string
}

function MillenniumGalleryPage() {
    let history = useHistory()

    const [currentSlide, setCurrentSlide] = useState(0)
    const [imgArray, setImgArray] = useState<{ path: string; name?: string; }[]>()

    const { id, index } = useParams<RouteParams>();


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

    useEffect(() => {
        switch (id) {
            case "0":
                setImgArray(millenniumArray0)
                break;
            case "1":
                setImgArray(millenniumArray1)
                break;
            case "99":
                setImgArray(images)
                break;

            default:
                break;
        }
        updateCurrentSlide(parseInt(index))
        // eslint-disable-next-line
    }, [])

    const millenniumArray0 = [{
        path: millenniumU000
    }, {
        path: millenniumU001
    }, {
        path: millenniumU01
    }, {
        path: millenniumU02
    }]

    const millenniumArray1 = [{
        path: millenniumU100
    }, {
        path: millenniumU101
    }, {
        path: millenniumU11
    }, {
        path: millenniumU12
    }, {
        path: millenniumU13
    }]

    const images = [
        {
            path: millennium1,
            name: "Portaria"
        },
        {
            path: millennium30,
            name: "Lobby e Lockers"
        },
        {
            path: millennium31,
            name: "Lobby e Lockers"
        },
        {
            path: millennium32,
            name: "Lobby e Lockers"
        },
        {
            path: millennium33,
            name: "Lobby e Lockers"
        },
        {
            path: millennium40,
            name: "Coworking"
        },
        {
            path: millennium41,
            name: "Coworking"
        },
        {
            path: millennium5,
            name: "Fitness"
        },
        {
            path: millennium6,
            name: "Fitness Externo"
        },
        {
            path: millennium7,
            name: "Sala de Massagem"
        },
        {
            path: millennium8,
            name: "Espaço Kids"
        },
        {
            path: millennium9,
            name: "Quadra Esportiva"
        },
        {
            path: millennium10,
            name: "Playground"
        },
        {
            path: millennium11,
            name: "Redário"
        },
        {
            path: millennium12,
            name: "Churrasqueira"
        },
        {
            path: millennium13,
            name: "Horta"
        },
        {
            path: millennium14,
            name: "Espaço Gourmet"
        },
        {
            path: millennium15,
            name: "Praça Molhada"
        },
        {
            path: millennium16,
            name: "Espaço Pet"
        },
        {
            path: millennium17,
            name: "Salão de Jogos"
        },
        {
            path: millennium18,
            name: "salão de Festas"
        },
        {
            path: millennium19,
            name: "Apoio Salão de Festas Externo"
        },
        {
            path: millennium20,
            name: "Piscina Adulto"
        },
        {
            path: millennium21,
            name: "Piscina Infantil"
        },
        {
            path: millennium22,
            name: "Pet Garden"
        }
    ]

    function next() {
        setCurrentSlide(currentSlide + 1)
    }

    function prev() {
        setCurrentSlide(currentSlide - 1)
    }

    function updateCurrentSlide(index: number) {
        if (currentSlide !== index) {
            setCurrentSlide(index);
        }
    }
    return (

        <div id="millennium-gallery-page" className="fade-in-long">
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
                        <Carousel onChange={updateCurrentSlide} selectedItem={currentSlide} emulateTouch infiniteLoop showThumbs={false} showArrows={false} showStatus={false} autoPlay={false}>
                            {
                                imgArray?.map((image) => {
                                    return (
                                        <div key={image.path}>
                                            <img src={image.path} alt="" />
                                            {
                                                image.name ?
                                                    <p className="legend">{image.name}</p> :
                                                    <> </>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <button onClick={next}>
                        <img src={rightArrow} alt="" />
                    </button>
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

export default MillenniumGalleryPage
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import logo from '../../../assets/img/logo-psg.png'

import backButtonIcon from '../../../assets/img/backbutton.png'


import ellipseA0 from '../../../assets/img/ellipse/areascomuns/0.jpg'
import ellipseA1 from '../../../assets/img/ellipse/areascomuns/1.jpg'

import ellipseU0 from '../../../assets/img/ellipse/unidades/0.jpg'
import ellipseU1 from '../../../assets/img/ellipse/unidades/1.jpg'
import ellipseU2 from '../../../assets/img/ellipse/unidades/2.jpg'


import leftArrow from '../../../assets/img/left-arrow.svg'
import rightArrow from '../../../assets/img/right-arrow.svg'

import './style.css'
import "./carousel.min.css";
import IdleTimer from "../../../elements/IdleTimer";

interface RouteParams {
    id: string
    index: string
}

function EllipseGalleryPage() {
    let history = useHistory()

    const [currentSlide, setCurrentSlide] = useState(0)
    const [imgArray, setImgArray] = useState<{ path: string; name?: string; }[]>()

    const { id, index } = useParams<RouteParams>();
    useEffect(() => {
        switch (id) {
            case "0":
                setImgArray(ellipseArray0)
                break;
            case "1":
                setImgArray(ellipseArray1)
                break;

            default:
                break;
        }
        updateCurrentSlide(parseInt(index))
        // eslint-disable-next-line
    }, [])

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

    const ellipseArray0 = [{
        path: ellipseA0
    }, {
        path: ellipseA1
    }]

    const ellipseArray1 = [{
        path: ellipseU0
    }, {
        path: ellipseU1
    }, {
        path: ellipseU2
    }]

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

        <div id="ellipse-gallery-page" className="fade-in-long">
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

export default EllipseGalleryPage
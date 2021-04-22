import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import logo from '../../../assets/img/logo-psg.png'

import backButtonIcon from '../../../assets/img/backbutton.png'



import millennium0 from '../../../assets/img/millennium/areascomuns/0.jpg'
import millennium1 from '../../../assets/img/millennium/areascomuns/1.jpg'
import millennium2 from '../../../assets/img/millennium/areascomuns/2.jpg'
import millennium3 from '../../../assets/img/millennium/areascomuns/3.jpg'
import millennium4 from '../../../assets/img/millennium/areascomuns/4.jpg'
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

interface RouteParams {
    id: string
    index: string
}

function MillenniumGalleryPage() {
    let { goBack } = useHistory()

    const [currentSlide, setCurrentSlide] = useState(0)
    const [imgArray, setImgArray] = useState<{ path: string; name?: string; }[]>()

    const { id, index } = useParams<RouteParams>();

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
        { path: millennium0 },
        { path: millennium1 },
        { path: millennium2 },
        { path: millennium3 },
        { path: millennium4 },
        { path: millennium5 },
        { path: millennium6 },
        { path: millennium7 },
        { path: millennium8 },
        { path: millennium9 },
        { path: millennium10 },
        { path: millennium11 },
        { path: millennium12 },
        { path: millennium13 },
        { path: millennium14 },
        { path: millennium15 },
        { path: millennium16 },
        { path: millennium17 },
        { path: millennium18 },
        { path: millennium19 },
        { path: millennium20 },
        { path: millennium21 }
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
                <button onClick={() => { goBack(); }}>
                    <img src={backButtonIcon} alt="" />
                    Voltar
                </button>
            </footer>
        </div>
    )
}

export default MillenniumGalleryPage
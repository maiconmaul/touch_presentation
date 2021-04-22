import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import logo from '../../../assets/img/logo-psg.png'

import backButtonIcon from '../../../assets/img/backbutton.png'


import highline0 from '../../../assets/img/highline/areascomuns/0.jpg'
import highline1 from '../../../assets/img/highline/areascomuns/1.jpg'
import highline2 from '../../../assets/img/highline/areascomuns/2.jpg'
import highline3 from '../../../assets/img/highline/areascomuns/3.jpg'
import highline4 from '../../../assets/img/highline/areascomuns/4.jpg'
import highline5 from '../../../assets/img/highline/areascomuns/5.jpg'
import highline6 from '../../../assets/img/highline/areascomuns/6.jpg'
import highline7 from '../../../assets/img/highline/areascomuns/7.jpg'
import highline8 from '../../../assets/img/highline/areascomuns/8.jpg'
import highline9 from '../../../assets/img/highline/areascomuns/9.jpg'
import highline10 from '../../../assets/img/highline/areascomuns/10.jpg'
import highline11 from '../../../assets/img/highline/areascomuns/11.jpg'
import highline12 from '../../../assets/img/highline/areascomuns/12.jpg'
import highline13 from '../../../assets/img/highline/areascomuns/13.jpg'
import highline14 from '../../../assets/img/highline/areascomuns/14.jpg'
import highline15 from '../../../assets/img/highline/areascomuns/15.jpg'
import highline16 from '../../../assets/img/highline/areascomuns/16.jpg'
import highline17 from '../../../assets/img/highline/areascomuns/17.jpg'
import highline18 from '../../../assets/img/highline/areascomuns/18.jpg'
import highline19 from '../../../assets/img/highline/areascomuns/19.jpg'
import highline20 from '../../../assets/img/highline/areascomuns/20.jpg'
import highline21 from '../../../assets/img/highline/areascomuns/21.jpg'
import highline22 from '../../../assets/img/highline/areascomuns/22.jpg'
import highline23 from '../../../assets/img/highline/areascomuns/23.jpg'
import highline24 from '../../../assets/img/highline/areascomuns/24.jpg'
import highline25 from '../../../assets/img/highline/areascomuns/25.jpg'
import highline26 from '../../../assets/img/highline/areascomuns/26.jpg'

// import highline00 from '../../../assets/img/gallery/complexo-01.jpg'
// import highline01 from '../../../assets/img/gallery/complexo-02.jpg'
// import highline02 from '../../../assets/img/gallery/complexo-03.jpg'
import highlineA10 from '../../../assets/img/highline/unidades/apto78-0.jpg'
import highlineA11 from '../../../assets/img/highline/unidades/apto78-1.jpg'
import highlineA12 from '../../../assets/img/highline/unidades/apto78-2.jpg'
import highlineA20 from '../../../assets/img/highline/unidades/apto79-0.jpg'
// import highline21 from '../../../assets/img/gallery/complexo-02.jpg'
// import highline22 from '../../../assets/img/gallery/complexo-03.jpg'
import highline30 from '../../../assets/img/highline/unidades/apto106-0.jpg'
import highline310 from '../../../assets/img/highline/unidades/apto106-10.jpg'
import highline311 from '../../../assets/img/highline/unidades/apto106-11.jpg'
import highline32 from '../../../assets/img/highline/unidades/apto106-2.jpg'

import leftArrow from '../../../assets/img/left-arrow.svg'
import rightArrow from '../../../assets/img/right-arrow.svg'

import './style.css'
import "./carousel.min.css";

interface RouteParams {
    id: string
    index: string
}

function HighlineGalleryPage() {
    let { goBack } = useHistory()

    const [currentSlide, setCurrentSlide] = useState(0)
    const [imgArray, setImgArray] = useState<{ path: string; name?: string; }[]>()

    const { id, index } = useParams<RouteParams>();

    useEffect(() => {
        switch (id) {
            case "0":
                setImgArray(highlineArray0)
                break;
            case "1":
                setImgArray(highlineArray1)
                break;
            case "2":
                setImgArray(highlineArray2)
                break;
            case "3":
                setImgArray(highlineArray3)
                break;
            case "99":
                setImgArray(images)
                break

            default:
                break;
        }
        updateCurrentSlide(parseInt(index))
    }, [])

    const highlineArray0 = [{
        path: highlineA10,
        name: "Living"
    }]

    const highlineArray1 = [{
        path: highlineA10,
        name: "Living"
    }, {
        path: highlineA11,
        name: "Varanda Gourmet"
    }, {
        path: highlineA12,
        name: "Suíte"
    }]

    const highlineArray2 = [{
        path: highlineA20,
        name: "Living"
    }]

    const highlineArray3 = [{
        path: highline30,
        name: "Living"
    }, {
        path: highline310,
        name: "Varanda Gourmet"
    }, {
        path: highline311,
        name: "Varanda Gourmet"
    }, {
        path: highline32,
        name: "Dormitório"
    }]


    const images = [
        { path: highline0 },
        { path: highline1 },
        { path: highline2 },
        { path: highline3 },
        { path: highline4 },
        { path: highline5 },
        { path: highline6 },
        { path: highline7 },
        { path: highline8 },
        { path: highline9 },
        { path: highline10 },
        { path: highline11 },
        { path: highline12 },
        { path: highline13 },
        { path: highline14 },
        { path: highline15 },
        { path: highline16 },
        { path: highline17 },
        { path: highline18 },
        { path: highline19 },
        { path: highline20 },
        { path: highline21 },
        { path: highline22 },
        { path: highline23 },
        { path: highline24 },
        { path: highline25 },
        { path: highline26 },
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

        <div id="highline-gallery-page" className="fade-in-long">
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
                                                    <p className="legend">{image.name}</p>:
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

export default HighlineGalleryPage
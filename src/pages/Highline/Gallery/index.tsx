import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import logo from '../../../assets/img/logo-psg.png'

import backButtonIcon from '../../../assets/img/backbutton.png'


import highline1 from '../../../assets/img/highline/areascomuns/1.jpg'
import highline2 from '../../../assets/img/highline/areascomuns/2.jpg'
import highline3 from '../../../assets/img/highline/areascomuns/3.jpg'
import highline4 from '../../../assets/img/highline/areascomuns/4.jpg'
import highline5 from '../../../assets/img/highline/areascomuns/5.jpg'
import highline6 from '../../../assets/img/highline/areascomuns/6.jpg'
import highline70 from '../../../assets/img/highline/areascomuns/7_0.jpg'
import highline71 from '../../../assets/img/highline/areascomuns/7_1.jpg'
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

import highline00 from '../../../assets/img/highline/unidades/apto55-0.jpg'
import highline01 from '../../../assets/img/highline/unidades/apto55-1.jpg'
import highline02 from '../../../assets/img/highline/unidades/apto55-2.jpg'

import highlineA10 from '../../../assets/img/highline/unidades/apto78-0.jpg'
import highlineA11 from '../../../assets/img/highline/unidades/apto78-1.jpg'
import highlineA12 from '../../../assets/img/highline/unidades/apto78-2.jpg'

import highlineA20 from '../../../assets/img/highline/unidades/apto79-0.jpg'
import highlineA21 from '../../../assets/img/highline/unidades/apto79-1.jpg'
import highlineA22 from '../../../assets/img/highline/unidades/apto79-2.jpg'

import highline30 from '../../../assets/img/highline/unidades/apto106-0.jpg'
import highline310 from '../../../assets/img/highline/unidades/apto106-10.jpg'
import highline311 from '../../../assets/img/highline/unidades/apto106-11.jpg'
import highline32 from '../../../assets/img/highline/unidades/apto106-2.jpg'

import leftArrow from '../../../assets/img/left-arrow.svg'
import rightArrow from '../../../assets/img/right-arrow.svg'

import './style.css'
import "./carousel.min.css";
import IdleTimer from "../../../elements/IdleTimer";

interface RouteParams {
    id: string
    index: string
}

function HighlineGalleryPage() {
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
        // eslint-disable-next-line
    }, [])

    const highlineArray0 = [{
        path: highline00,
        name: "Suíte"
    },{
        path: highline01,
        name: "Living"
    },{
        path: highline02,
        name: "Varanda Gourmet"
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
    },{
        path: highlineA21,
        name: "Suíte"
    },{
        path: highlineA22,
        name: "Varanda Gourmet"
    },]

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
        {
            path: highline1,
            name: "Portaria"
        },
        { 
            path: highline2,
            name: "Entrada/Saída Veículos"
        },
        { 
            path: highline3,
            name: "Coworking Externo"
        },
        { 
            path: highline4,
            name: "Apoio Salão de Festas Externo"
        },
        {
            path: highline5,
            name: "Salão de Festas"
        },
        {
            path: highline6,
            name: "Coworking"
        },
        {
            path: highline70,
            name: "Lobby e Lockers"
        },
        {
            path: highline71,
            name: "Lobby e Lockers"
        },
        {
            path: highline8,
            name: "Lounge Bar"
        },
        {
            path: highline9,
            name: "Horta"
        },
        {
            path: highline10,
            name: "Churrasqueira"
        },
        {
            path: highline11,
            name: "Redário"
        },
        {
            path: highline12,
            name: "Piscina Adulto"
        },
        {
            path: highline13,
            name: "Piscina Infantil"
        },
        {
            path: highline14,
            name: "Fitness"
        },
        {
            path: highline15,
            name: "Locker"
        },
        {
            path: highline16,
            name: "Espaço Pet"
        },
        {
            path: highline17,
            name: "Pet Garden"
        },
        {
            path: highline18,
            name: "Yoga"
        },
        {
            path: highline19,
            name: "Lobby"
        },
        {
            path: highline20,
            name: "Sala de Massagem"
        },
        {
            path: highline21,
            name: "Espaço Teen"
        },
        { 
            path: highline22,
            name: "Kids"
        },
        {
            path: highline23,
            name: "Playground"
        },
        {
            path: highline24,
            name: "Quadra Esportiva"
        },
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
                <button onClick={() => { history.goBack(); }}>
                    <img src={backButtonIcon} alt="" />
                    Voltar
                </button>
            </footer>
        </div>
    )
}

export default HighlineGalleryPage
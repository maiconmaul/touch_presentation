import React from 'react'

import './style.css'

interface BorderedImgProps {
    img: string
}

const BorderedImg: React.FC<BorderedImgProps> = ({ img }: BorderedImgProps) => {
    return (
        <div className="linear-layout-vertical">
            <div className="img-border-horizontal-line half" />
            <div className="linear-layout-horizontal">
                <div className="img-border-vertical-line half" />
                <img src={img} className="testeImg" alt="" />
                <div className="img-border-vertical-line half end" />
            </div>
            <div className="img-border-horizontal-line half end" />
        </div>
    )
}

export default BorderedImg
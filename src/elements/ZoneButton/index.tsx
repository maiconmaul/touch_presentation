import { MouseEventHandler } from 'react'

import cameraIcon from '../../assets/img/camera-icon.svg'

import './style.css'

type ZoneButtonProps = {
    x: number,
    y: number,
    height: number,
    width: number,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const ZoneButton: React.FC<ZoneButtonProps> = ({x, y, height, width, onClick}: ZoneButtonProps) => {
    const style = {
        top: y,
        left: x,
        height,
        width
    }
    return(
        <button id="zone-button" style={style} onClick={onClick}>
            <img src={cameraIcon} alt=""/>
        </button>
    )
}

export default ZoneButton
import { MouseEventHandler } from 'react'

// import cameraIcon from '../../assets/img/camera-icon.svg'

import './style.css'

type ZoneButtonProps = {
    x: number
    y: number
    height: number
    width: number
    rotate?: number
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const ZoneButton: React.FC<ZoneButtonProps> = ({ x, y, height, width, rotate, onClick }: ZoneButtonProps) => {
    const fixRotate = rotate === undefined ? 0 : rotate
    const style = {
        top: y,
        left: x,
        height,
        width,
        "-ms-transform": `rotate(${fixRotate}deg)`,
        transform: `rotate(${fixRotate}deg)`
    }


    // const style2 = {
    //     top: (y + (height/2)) - 20,
    //     left: (x + (width/2)) - 20,

    //     // height: 40,
    //     // width
    // }

    return (
        <div id="zone-button">
            <button style={style} onClick={onClick} />
            {/* <img style={style2} src={cameraIcon} alt="" /> */}
        </div>
    )
}

export default ZoneButton
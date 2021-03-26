import React, { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

interface ImageButtonProps {
    title: string;
    image: string;
    border?: boolean;
    link?: string;
    children?: ReactNode;
}


const ImageButton: React.FC<ImageButtonProps> = ({ title, border = false, link, image, children }: ImageButtonProps) => {
    let history = useHistory()
    let classNameText = border === true ? "imagebutton imagebutton-border" : "imagebutton"
    let destination = link === undefined ? "" : link
    return (
        <div className={classNameText}>
            <button onClick={() => history.push(destination)}>
                <img src={image} alt={ title } />
                <h2>{ title }</h2>
            </button>
        </div>
    )
}

export default ImageButton;
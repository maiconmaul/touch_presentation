import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

interface ImageButtonProps {
    title: string;
    link?: string;
    image: string;
    children?: ReactNode;
}


const ImageButton: React.FC<ImageButtonProps> = ({ title, link, image, children }: ImageButtonProps) => {
    return (
        <div className="imagebutton">
            <Link to={link === undefined ? "" : link}>
                <img src={image} alt={ title } />
                <h2>{ title }</h2>
            </Link>
        </div>
    )
}

export default ImageButton;
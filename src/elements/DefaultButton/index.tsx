import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

interface DefaultButtonProps {
    title: string;
    link?: string;
    description?: string;
    children?: ReactNode;
}


const DefaultButton: React.FC<DefaultButtonProps> = ({ title, link, description, children }: DefaultButtonProps) => {
    return (
        <div id="botao">
            <Link to={link === undefined ? "" : link}>
                <h2>{title}</h2>
                <span>{description}</span>
            </Link>
        </div>
    )
}

export default DefaultButton;
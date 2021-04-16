import React, { MouseEventHandler, ReactNode } from 'react'
import './style.css'

interface DefaultLinkProps {
    title: string;
    extraClass?: string;
    description?: string;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const DefaultLink: React.FC<DefaultLinkProps> = ({ title, extraClass, description, children, onClick }: DefaultLinkProps) => {

    const classStyle = (extraClass !== "" && extraClass !== undefined) ? extraClass : `scale-in-ver-center`
    return (
        <div>
            <div id="botao" className={classStyle}>
                <button onClick={onClick} className={extraClass}>
                    <h2>{title}</h2>
                    <span>{description}</span>
                </button>
            </div>
        </div>
    )
}

export default DefaultLink;
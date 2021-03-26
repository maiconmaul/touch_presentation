import React, { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

interface DefaultButtonProps {
    title: string;
    link?: string;
    description?: string;
    children?: ReactNode;
}


const DefaultButton: React.FC<DefaultButtonProps> = ({ title, link, description, children }: DefaultButtonProps) => {
    let history = useHistory()
    var destination = link === undefined ? "" : link
    console.log(destination)
    return (
        <div id="botao">
            <button onClick={() => history.push(destination)} >
                <h2>{title}</h2>
                <span>{description}</span>
            </button>
            {/* <Link to={destination}>
                <h2>{title}</h2>
                <span>{description}</span>
            </Link> */}
        </div>
    )
}

export default DefaultButton;
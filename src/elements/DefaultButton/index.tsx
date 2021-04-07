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

    function handleClick(dest: string){
        console.log(dest)
        if (dest !== "" && dest !== undefined && dest !== " "){
            history.push(dest)
        }
    }

    return (
        <div>
            <div id="botao" className="scale-in-ver-center">
                <button onClick={() => handleClick(destination)} >
                    <h2>{title}</h2>
                    <span>{description}</span>
                </button>
            </div>
        </div>
    )
}

export default DefaultButton;
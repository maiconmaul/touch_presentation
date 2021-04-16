import React, { MouseEventHandler, ReactNode } from 'react'
// import { useHistory } from 'react-router-dom'
import './style.css'

interface ActionButtonProps {
    title: string;
    children?: ReactNode;
    extraClass?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
}


const ActionButton: React.FC<ActionButtonProps> = ({ title, onClick, extraClass, children }: ActionButtonProps) => {
    return (
        <div>
            <div id="action-button" className={`${extraClass}`} >
                <button onClick={onClick} >
                    <h2>{title}</h2>
                    {/* <span>{description}</span> */}
                </button>
            </div>
        </div>
    )
}

export default ActionButton;
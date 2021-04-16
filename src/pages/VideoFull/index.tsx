import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import './style.css'

import video from '../../assets/videos/movie.mp4'


function VideoFullPage() {
    let history = useHistory()
    useEffect(() => {
        document.onmousedown = () => {
            history.goBack()
            document.onmousedown = null
        }
    })
    return (
        <div id="pagevideo-full">
            <video src={video} typeof="video/mp4" className="fade-in-fwd" autoPlay loop muted />
        </div>
    )
}

export default VideoFullPage
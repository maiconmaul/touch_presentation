import { useEffect } from 'react'
import { useHistory } from 'react-router'

import './style.css'


import video from '../../assets/videos/movie2.mp4'

function VideoPage(){
    let history = useHistory()

    useEffect(() => {
        document.onmousedown = () => {
            history.goBack()
            document.onmousedown = null
        }
    })

    return (
        <div id="id-pagevideo">
            <video src={video} typeof="video/mp4" autoPlay loop muted/>
        </div>
    )
}

export default VideoPage
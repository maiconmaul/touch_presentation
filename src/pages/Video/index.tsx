import react, { useEffect } from 'react'
import { useHistory } from 'react-router'

function VideoPage() {
    let history = useHistory()
    useEffect(() => {
        document.onmousedown = () => {
            history.goBack()
            document.onmousedown = null
        }
    })

    return (
        <div id="id-pagevideo">
        </div>
    )
}

export default VideoPage
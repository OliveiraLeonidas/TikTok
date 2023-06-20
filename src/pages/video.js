import React, { useRef, useState } from "react";
import './video.css'
import VideoFooter from "./Components/footer/VideoFooter";
import VideoSideBar from "./Components/sidebar/videoSideBar";

// const video = {
//     background: "red",
// }

export default function Video({likes, messages, shares, name, description, music, url}) {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false)
    function handleStart() {
        if(play === false) {
            videoRef.current.play()
            setPlay(true)
        
        } else if(play === true) {
            videoRef.current.pause()
            setPlay(false);
        }

    }

    return (
        <div className="video">
            <video 
                className="video__player"
                ref={videoRef}
                onClick={handleStart}
                
                loop
                src={url}>
            </video>
            <VideoSideBar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <VideoFooter
                name={name}
                description={description}
                music={music}
            />
        </div>
    )
}
"use client"

import Youtube from "react-youtube"
import { X, YoutubeLogo } from "@phosphor-icons/react"
import { useState } from "react"

const VideoTrailer = ({trailerId}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleTrailerButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return(
            <div className="fixed md:bottom-3 bottom-2 md:right-3 right-2">
                <button onClick={handleTrailerButton} className="text-color-primary hover:text-color-red transition-all float-right p-2 m-2 bg-color-secondary rounded-full"><X size={30} /></button>
                <Youtube
                videoId={trailerId} 
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Trailer Anime Tidak Ada.")}
                />
            </div>
        )
    }

    const PlayerOpenTrailer = () => {
        return(
            <button
                onClick={handleTrailerButton}
                className="fixed bottom-5 right-5 bg-color-secondary p-2 rounded-full text-color-primary hover:text-color-red transition-all"
                >
                <YoutubeLogo size={40} />
            </button>
        )
    }

    return isOpen ? <Player/> : <PlayerOpenTrailer/>
}

export default VideoTrailer
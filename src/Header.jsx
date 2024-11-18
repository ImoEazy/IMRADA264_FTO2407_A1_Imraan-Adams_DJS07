import React from "react"
import Image from "../image/troll-face.png"

export default function Header() {
    return (
    <header className="header">
        <img src={Image} className="header--image" />
        <h1 className="header--title">Meme Generator</h1>
        <h4 className="header--project">React Course</h4>
    </header>
    )
}
import React from 'react'
import meme2 from './meme2.png';

export default function Header() {
    return (
        <header className="header">
            <img img
                 src={meme2}
                 alt="dog"
                 className="header-img"
                 />
            <h2 className="header-title">Projekt meme</h2>
            <h4 className="header-project">Meme generator ;]</h4>
        </header>

    )
    }

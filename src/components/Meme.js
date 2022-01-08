import React from 'react'
//import memesData from '../memesData'


export default function Meme() {

// wyswietlany mem
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    // memy z api
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(response => setAllMemes(response.data.memes))
    }, [])

    function importMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form">

                <button
                 className="form-button"
                 onClick={importMeme}
                 >Generuj kolejny mem</button>
            </div>
            <img className="meme-image" src={meme.randomImage} alt="k"/>
            <h2 className="meme--image top">{meme.topText}</h2>
            <h2 className="meme--image bottom">{meme.bottomText}</h2>


        </main>
    )
}

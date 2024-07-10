import React from 'react'
import './index.css'
import Random from './Random'
import Tag from './Tag'

function App() {
    return (
        <>
            <div>
                <h1 style={{backgroundColor : 'darkblue', textAlign : 'center', width : '80%', margin : '30px auto', color : 'white', padding : '7px'}}>RANDOM GIFS</h1>
                <div>
                    <Random/>
                    <Tag/>
                </div>
            </div>
        </>
    )
}

export default App

// const API_KEY = process.env.REACT_APP_GIPY_API_KEY;
// https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}
// https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}
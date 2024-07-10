import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from './useGif';

function Random() {

    const {gif, loading, fetchData} = useGif()

    function clickHandler() {
        fetchData()
    }

    return (
        <>
            <div className='random'>
                <h1>Random Gif</h1>
                {
                    loading ? <Spinner/> : <img src={gif} alt="gif" width='200px' height='200px'/>
                }
                <button onClick={clickHandler}>Generate</button>
            </div>
        </>
    )
}

export default Random
import React, { useState } from 'react'
import useGif from './useGif';
import Spinner from './Spinner';

function Tag() {
    const [tag, setTag] = new useState('cars');
    const {gif, loading, fetchData} = useGif(tag)

    function clickHandler() {
        fetchData()
    }

    function changeHandler(e) {
        setTag(e.target.value)
    }

    return (
        <>
            <div className='tag'>
                <h1>Random {tag} Gif</h1>
                <input type='text' name='tagName' placeholder='Enter the tag of gif' value={tag} onChange={changeHandler}/>
                {
                    loading ? <Spinner/> : <img src={gif} alt="gif" width='200px' height='200px'/>
                }
                <button onClick={clickHandler}>Generate</button>
            </div>
        </>
    )
}

export default Tag
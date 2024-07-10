import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

function useGif(tag) {
    const [gif, setGif] = new useState();
    const [loading, setLoading] = new useState(false);
    
    async function fetchData(tag) {
        setLoading(true)
        const response = await axios.get(tag ? url + `&tag=${tag}` : url)
        const imageSrc = response.data.data.images.downsized_large.url
        setGif(imageSrc);
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {gif, loading, fetchData}
}

export default useGif
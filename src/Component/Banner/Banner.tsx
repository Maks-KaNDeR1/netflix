import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import requests from '../../api/requests';
import { MovieType } from '../../api/types';
import './Banner.css';


export const Banner = () => {

    const [movie, setMovie] = useState<MovieType>({} as MovieType)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }
        fetchData()
    }, [requests]);


    const truncate = (str: any, n: number) => {
        if (str)
            return str.length > n ? str.substr(0, n - 1) + '...' : str
    }


    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    'https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}'
                )`,
                backgroundPosition: 'center center'
            }}
        >
            <div className="banner__contents">

                <h1 className="banner__title">
                    {movie.original_name || movie.name || movie.title || movie.original_title}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">  Play </button>
                    <button className="banner__button"> My List </button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie.overview, 150)}
                </h1>
            </div>
            <div className='banner__fadeBotton' />
        </header>
    )
}





//Express 



























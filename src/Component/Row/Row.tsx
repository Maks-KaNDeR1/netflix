import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'
import { MovieType } from '../../api/types';
import './Row.css';
import YouTube, { YouTubeProps } from 'react-youtube';
import movieTrailer from 'movie-trailer';



const base_url = 'https://image.tmdb.org/t/p/original/'

type PropsType = {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
}

const Row: React.FC<PropsType> = ({ title, fetchUrl, isLargeRow }) => {

  const [movies, setMovies] = useState([] as MovieType[])
  const [trailerUrl, setTrailerUrl] = useState<string | null>('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl]);


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = async (movie: MovieType) => {

    let movieDate = (movie.first_air_date || movie.release_date)
    console.log(Number(movieDate.slice(0, 4)))
    let movieName = movie.original_name || movie.name || movie.title || movie.original_title
    console.log(movieName)

    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movieName)
        .then((url: any) => {
          if (!url) {
            setTrailerUrl('https://www.youtube.com/watch?v=&ab_channel=YouTubeViewers')
          }
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((err: any) => console.log(err))
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters" >
        {
          movies.map(m => (
            <img key={m.id}
              onClick={() => handleClick(m)}
              className={`row__poster ${isLargeRow && 'row__posterLarge'} `}
              src={`${base_url}${isLargeRow ? m.poster_path : m.backdrop_path
                }`}
              alt={m.name} />
          ))
        }
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

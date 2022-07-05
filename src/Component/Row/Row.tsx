import React, { useState, useEffect } from 'react';
import axios from '../../api/axios'
import { MovieType } from '../../api/types';
import './Row.css';
import YouTube from 'react-youtube';
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
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  //https://www.youtube.com/watch?v=0DAmWHxeoKw&ab_channel=Netflix
  const handleClick = async (movie: MovieType) => {
    if (trailerUrl) {
      console.log(trailerUrl)
      setTrailerUrl('')
    } else {
      movieTrailer(movie.name || '')
        .then((url: any) => {
          // https://wwww.youtube.com/watch?v=
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

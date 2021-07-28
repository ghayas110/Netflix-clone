import axios from './axios'
import React,{useState,useEffect} from 'react'
import "./Row.css"
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"
function Row({title ,fetchUrl, isLargeRow=false}) {
    const [movies, setMovies] = useState([])
    const [trailerurl, setTrailerUrl] = useState("")
    const base_Url="https://image.tmdb.org/t/p/original/";
    useEffect(() => {
       async function fetchData(){
           const request = await axios.get(fetchUrl);
           setMovies(
               request.data.results
           );
           return request
       }
       fetchData();
    }, [fetchUrl])

    const opts ={
        hieght:"390",
        width:"100%",
        playerVars:{
        autoplay:1,
        },

    }
    const handleClick=(movie)=>{
        if(trailerurl)
        {
            setTrailerUrl('')

        }else{
            movieTrailer(movie?.name || "")
            .then((url)=>{
                const urlParams= new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error)=>alert(error))
        }

    }
    console.log(movies)
    return (
        <div className="row">
            {title}
            <div className="row__posters">
            {movies.map(movie=>(
                <img onClick={()=>handleClick(movie)} className={`row__poster ${isLargeRow} && row__posterLarge`} key={movie.id} src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))}
            </div>
          {trailerurl &&  <YouTube videoId={trailerurl} opts={opts}/>}
        </div>
    )
}

export default Row

import React from 'react'
import Genere from './Genere'

const Movie = (props) =>{
    return (
        <li className = 'movie'>
            <h1> {props.movie.original_title} </h1>
            <div> Released: {props.movie.release_date}</div>
            <img src = {props.movie.poster_path} alt = 'poster'></img>
            <div >{props.movie.overview}</div>
            <div className = 'genres'>
                {props.movie.genres.map((genre) => {
                    return <Genere genre = {genre} movie = {props.movie} key = {props.movie.title + genre.id}></Genere>
                })}
            </div>
        </li>
    )
}

export default Movie
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../styles/MovieCard/movieCard.css'

const MovieCard = props => {
    return (
        <div className='movie-card'>
            <Link to={`/movies/${props.imdbID}`}>
                <div className='movie-card__image'>
                    <img src={props.img} />
                    <img src={props.img2} />

                </div>
            </Link>
            <h3 className='movie-card__name'>{props.name}</h3>
            <div className='movie-card__more'>{props.more}</div>
            <div className='movie-card_btn'>
            </div>
        </div>

    )
}

MovieCard.propTypes =
{
    img: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    more: PropTypes.string.isRequired,
    imdbID:PropTypes.string.isRequired
}

export default MovieCard
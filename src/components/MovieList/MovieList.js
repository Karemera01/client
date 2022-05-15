import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMovies } from '../../redux/actions/movieActions';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import Grid from '../Grid/Grid';
import MovieCard from '../MovieCard/MovieCard';



const setData = (data, movies) => {
    for (let i = 1; i < 9; i++) {
        data.push({
            key: i,
            Poster: movies[i].Poster,
            Poster2: movies[i].Poster,
            Title: movies[i].Title,
            Year: movies[i].Year,
            imdbID: movies[i].imdbID
        });
    }
};
const MovieList = () => {
    const movies = useSelector((state) => state.allMovies.movies);
    const dispatch = useDispatch();

    const getMovieDetails = async () => {
        const feedbackResponse = await axios.get("http://www.omdbapi.com/?s=star wars&apikey=2890625f")
            .catch((err) => {
                console.error(err);
            });
        dispatch(setMovies(feedbackResponse.data.Search));
    };

    useEffect(() => {
        getMovieDetails();
    }, []);


    const data = [];
    if (movies.length > 1)
        setData(data, movies);
    console.log(data)

    return (
        <>
            <Title name="All" title="Movies"></Title>
            <div className='movies_body'>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {

                        data.map((item, index) => (
                            <MovieCard
                                key={item.key}
                                img={item.Poster}
                                img2={item.Poster2}
                                name={item.Title}
                                more={item.Year}
                                imdbID={item.imdbID}
                            />
                        ))
                    }
                </Grid>

            </div>

        </>
    )
}
export default MovieList;
export { setData };


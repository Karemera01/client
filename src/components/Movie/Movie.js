import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMovie, deleteselectedMovie } from '../../redux/actions/movieActions';
import Title from '../Title/Title';
import photo from '../../assets/images/photo.jpg'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import '../../styles/Movies/Movies.css'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Movie = () => {
  const { movieID } = useParams();
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const getDetails = async () => {
    const feedbackResponse = await axios.get(`http://www.omdbapi.com/?i=${movieID}&apikey=2890625f`)
      .catch(err => {
        console.error(err);
      });
    console.log(feedbackResponse.data)
    dispatch(selectedMovie(feedbackResponse.data));
  };
  const data = [];
  useEffect(() => {
    if (movieID !== "")
      getDetails();
    return () => {
      dispatch(deleteselectedMovie());
    }
  }, [movieID]);

  const setData = (data) => {
    data.push({
      key: 1,
      name: movie.Title,
      Year: movie.Year,
      Genre: movie.Genre,
      Plot: movie.Plot,
      Actors: movie.Actors,
      Ratings: movie.Ratings,
      Poster: movie.Poster
    });
  };

  return (
    <div style={{ backgroundImage: `url(${photo})`, backgroundRepeat: 'none' }}>
      <Title name={
        Object.keys(movie).length === 0 ? `Title` : `${movie.Title}`}
        title="Details">
      </Title>
      {Object.keys(movie).length === 0 ? (
        <div className="center-loading-item">
          <Spin indicator={antIcon} />
        </div>
      ) : (setData(data), console.log(data),
        <div className='movie-container'>
          <section className='img-section'>
            <div className='img-div'>
              <img className='img-div-style' alt='' src={movie.Poster} />
            </div>
          </section>
          <section className='title-section'>&nbsp;
            <br />
            Ratings:
            {
              movie.Ratings.map((item, index) => (
                <div className='ratings-section-style'>{item.Source}: {item.Value}</div>
              ))
            }

            Plot: {movie.Plot}
          </section>
          <section className='desc-section'>
            {/* Plot: {movie.Plot} */}
          </section>
          <section className='ratings-section'>


          </section>
          <img alt='' className='sub-image-sec' src={movie.Poster} />

        </div>
      )}
    </div>
  )
};
export default Movie;

import React, { Component, Fragment } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Error from "./components/ErrorPage/Error";
import Footer from "./components/Footer/Footer";
import Movie from "./components/Movie/Movie";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <div>
          <div className="container">
            <div className="main">
              <Routes>
                <Route exact path="/movies" element={<MovieList />} />
                <Route exact path="/movies/:movieID" element={<Movie />} />
                <Route exact path="/" element={<MovieList />} />
                <Route path='*' element={<Error />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;

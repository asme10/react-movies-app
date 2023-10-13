  import React, { useEffect, useState } from "react";
  import "./App.css";
  import Navbar from "./components/Navbar";
  import Slider from "./components/Slider";
  import MovieCard from "./components/MovieCard";
  import SearchForm from "./components/SearchForm";
  import Footer from "./components/Footer";

  const apiUrl = process.env.REACT_APP_OMDB;

  const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("Harry Potter");
    const [isLoading, setIsLoading] = useState(true);

    const searchMovies = async (title) => {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}&s=${title}`);
      const data = await res.json();

      setMovies(data.Search);
      setIsLoading(false);
    };

    useEffect(() => {
      searchMovies(searchTerm);
    }, [searchTerm]);

    return (
      <>
        <Navbar />
        <Slider />
        <div className="container" style={{ paddingBottom: "60" }}>
          <SearchForm
            searchMovies={searchMovies}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <div className="row movies-container md mx-1 ">
            {isLoading ? (
              <div className="alert alert-success" role="alert">
                <p>Loading...</p>
              </div>
            ) : movies?.length > 0 ? (
              movies.map((movie) => (
                <div key={movie.imdbID} className="col-lg-4">
                  <MovieCard movie={movie} />
                </div>
              ))
            ) : (
              <div
                className="alert alert-info text-center fw-bold"
                role="alert"
                style={{ maxwidth: 940, margin: "auto", fontSize: 24 }}
              >
                <p>No movie found! Please search another!</p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  };

  export default App;

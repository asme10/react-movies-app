import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card mb-3 movie-card d-flex ">
      <div className="row g-0">
        <div className="col-sm-12 col-md-4 ">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400x220"
            }
            alt={movie.Title}
            className="img-fluid"
            style={{
              minHeight: "220px",
              width: "100%",
              borderRadius: 5,
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-sm-12 col-md-8">
          <div className="card-body d-flex flex-column h-100">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">Year: {movie.Year}</p>
            <p className="card-text">Type: {movie.Type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

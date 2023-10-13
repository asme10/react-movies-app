import React from "react";

const SearchForm = ({
  searchMovies,
  searchTerm,
  setSearchTerm,
  searchInputRef,
  onSearchBarClick,
}) => {
  return (
    <div className="row align-items-center mt-4 mb-3">
      <div className="col-md-8 offset-md-2">
        <form className="search d-flex my-4" role="search">
          <input
            className="form-control me-2"
            placeholder="Search here..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={searchInputRef}
            onClick={onSearchBarClick}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={() => searchMovies(searchTerm)}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;

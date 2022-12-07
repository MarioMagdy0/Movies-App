import React, { useRef } from "react";

function Search(props) {
  const nameInputRef = useRef();

  const handleClick = () => {
    props.searchMovie(nameInputRef.current.value);
  };

  return (
    <div className="input-group mb-3">
      <input
        ref={nameInputRef}
        type="text"
        className="form-control"
        placeholder="Movie name"
        aria-label="Movie name"
        aria-describedby="button-addon2"
      />
      <button
        onClick={handleClick}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2">
        Search
      </button>
    </div>
  );
}

export default Search;

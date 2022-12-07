import { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";

function MovieDetails() {
  const [movieData, setMovieData] = useState({});
  const [error, setError] = useState(false);

  const history = useHistory();

  const { id } = useParams();

  const apiKey = "01da178859a0cf7e968500a5e58bcdb3";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status_code === 34) {
          setError(true);
        } else {
          setMovieData(data);
        }

        console.log("movieData: ", data);
      });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          history.push("/");
        }}>
        Back
      </button>
      {error === true ? (
        <div className="card mb-3">Not Found</div>
      ) : (
        <div className="card mb-3">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            width="600px"
            style={{ margin: "auto" }}
            alt="movie-poster"
          />
          <div className="card-body">
            <h5 className="card-title">{movieData.title}</h5>
            <p className="card-text">{movieData.overview}</p>
            <p className="card-text">
              <small className="text-muted">{movieData.vote_average}</small>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;

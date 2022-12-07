import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import Search from "./Search";
// import { movies } from "../movies";

function MoviesList({ page, setPage }) {
  const [movies, setMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(0);
  const [isLoading, setLoading] = useState(false);

  // call themoviedb API
  const apiKey = "01da178859a0cf7e968500a5e58bcdb3";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;

  useEffect(() => {
    setLoading(true);
    fetch(url, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          console.log("Retrieved: ", data);
          setMovies(data.results);
          setOriginalMovies(data.results);
          setData(data);
          setLoading(false);
        }, 2000);
      });
  }, [url]);

  useEffect(() => {
    let filteredMovies = originalMovies;

    if (search.length > 0) {
      filteredMovies = originalMovies.filter((item) => {
        if (item.title.toLowerCase().includes(search.toLowerCase()))
          return true;
        else return false;
      });
    }

    // sort by name
    if (sort === 2) {
      filteredMovies.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
    } else if (sort === 1) {
      filteredMovies.sort((a, b) => {
        return a.vote_average > b.vote_average ? -1 : 1;
      });
    }

    setMovies([...filteredMovies]);
  }, [search, sort, originalMovies]);

  // const searchMovie = (keyword) => {
  //   console.log(keyword);
  //   const filteredMovies = originalMovies.filter((item) => {
  //     if (item.title.toLowerCase().includes(keyword.toLowerCase())) return true;
  //     else return false;
  //   });
  //   console.log(originalMovies);

  //   setMovies(filteredMovies);
  // };

  // const compareFun = () => {
  //   MovieCard.rate();
  // };

  // const sortByName = () => {
  //   console.log("hey by name");
  //   const sortedMoviesByName = originalMovies.sort((a, b) => {
  //     return a.title > b.title ? 1 : -1;
  //   });
  //   // setMovies([...sortedMoviesByName]);
  //   sortByNameWithSearch();
  // };
  // const sortByNameWithSearch = () => {
  //   console.log("hey by name");
  //   const sortedMoviesByName = movies.sort((a, b) => {
  //     return a.title > b.title ? 1 : -1;
  //   });
  //   setMovies([...sortedMoviesByName]);
  // };

  // const sortByRate = () => {
  //   console.log("hey by rate");
  //   const sortedMoviesByRate = originalMovies.sort((a, b) =>
  //     a.vote_average > b.vote_average ? -1 : 1
  //   );
  //   console.log(sortedMoviesByRate);
  //   // setMovies([...sortedMoviesByRate]);
  //   sortByRateWithSearch();
  // };
  // const sortByRateWithSearch = () => {
  //   console.log("hey by rate");
  //   const sortedMoviesByRate = movies.sort((a, b) =>
  //     a.vote_average > b.vote_average ? -1 : 1
  //   );
  //   console.log(sortedMoviesByRate);
  //   setMovies([...sortedMoviesByRate]);
  // };

  // console.log("We are here");
  // console.log(movies.id);

  return (
    <>
      <Search searchMovie={setSearch} />
      <Filter sort={setSort} />
      {isLoading ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex p-2 justify-content-evenly flex-wrap">
            {movies.map((item) => (
              <MovieCard
                id={item.id}
                name={item.title}
                description={item.overview}
                rate={item.vote_average}
                posterURL={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
            ))}
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item" style={{ cursor: "pointer" }}>
                <span
                  class="page-link"
                  tabindex="-1"
                  aria-disabled="true"
                  onClick={() => setPage(1)}>
                  {"<<"}
                </span>
              </li>

              {page - 3 >= 1 ? (
                <li class="page-item" style={{ cursor: "pointer" }}>
                  <span class="page-link">...</span>
                </li>
              ) : null}

              {page - 2 >= 1 ? (
                <li class="page-item" style={{ cursor: "pointer" }}>
                  <span class="page-link" onClick={() => setPage(page - 2)}>
                    {page - 2}
                  </span>
                </li>
              ) : null}

              {page - 1 >= 1 ? (
                <li class="page-item" style={{ cursor: "pointer" }}>
                  <span class="page-link" onClick={() => setPage(page - 1)}>
                    {page - 1}
                  </span>
                </li>
              ) : null}

              <li class="page-item disabled">
                <span class="page-link">{page}</span>
              </li>

              {page + 1 <= 500 ? (
                <li class="page-item" style={{ cursor: "pointer" }}>
                  <span class="page-link" onClick={() => setPage(page + 1)}>
                    {page + 1}
                  </span>
                </li>
              ) : null}

              {page + 2 <= 500 ? (
                <li class="page-item" style={{ cursor: "pointer" }}>
                  <span class="page-link" onClick={() => setPage(page + 2)}>
                    {page + 2}
                  </span>
                </li>
              ) : null}

              {page + 3 <= 500 ? (
                <li class="page-item" style={{ cursor: "pointer" }}>
                  <span class="page-link">...</span>
                </li>
              ) : null}

              <li class="page-item" style={{ cursor: "pointer" }}>
                <span
                  class="page-link"
                  tabindex="-1"
                  aria-disabled="true"
                  onClick={() => setPage(500)}>
                  {">>"}
                </span>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default MoviesList;

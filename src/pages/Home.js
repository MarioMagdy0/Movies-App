import MoviesList from "../components/MoviesList";
// import classes from "./Home.module.css";

// props drilling
function Home({ page, setPage }) {
  return (
    <div>
      <MoviesList page={page} setPage={setPage} />
    </div>
  );
}

export default Home;

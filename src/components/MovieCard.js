import classes from "./MovieCard.module.css";
import { Link } from "react-router-dom";
function MovieCard(props) {
  return (
    // <div className={classes.movieCard}>
    //   <h4 className={classes.movieName}>{props.name}</h4>
    //   <p className={classes.movieName}>{props.description}</p>
    //   <span className={classes.movieName}>{props.rate} / 10</span>
    // </div>
    <div className="card my-3" style={{ width: "18rem" }}>
      <Link to={`/${props.id}`}>
        <img src={props.posterURL} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <span className={classes.movieName}>{props.rate} / 10</span>
      </div>
    </div>
  );
}

export default MovieCard;

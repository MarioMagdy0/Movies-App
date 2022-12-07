import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <figure className="text-center text-success">
        <blockquote className="blockquote">
          <p>Your Movie Site</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          This is your favorite <cite title="Source Title">Movie Night</cite>
        </figcaption>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Home
            </Link>
          </div>
          <div class="container-fluid">
            <Link class="navbar-brand" to="/about">
              About
            </Link>
          </div>
        </nav>
      </figure>
    </>
  );
}

export default Header;

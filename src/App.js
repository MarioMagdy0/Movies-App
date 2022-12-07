// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="container-xxl">
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:id">
          <MovieDetails />
        </Route>
        <Route path="/">
          <Home page={page} setPage={setPage} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

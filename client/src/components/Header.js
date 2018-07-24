import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-4 text-cetnter">
      <h1>New York Times</h1>

      <Link to="/" className="text-center badge badge-primary">Home</Link>
      {" "}
      <Link to="/savedArticles" className="text-center badge badge-primary">Saved</Link>
    </header>
  );
};

export default Header;
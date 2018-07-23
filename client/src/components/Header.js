import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-4 text-cetnter">
      <h1>NYT</h1>

      <Link to="/" className="badge badge-primary">Home</Link>
      {" "}
      <Link to="/savedArticles" className="badge badge-primary">Saved</Link>
    </header>
  );
};

export default Header;
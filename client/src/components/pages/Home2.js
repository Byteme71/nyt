import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Home extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    // after component loads, get all products from db
    axios.get("/api/Nytreacts").then((response) => {
      this.setState({
        results: response.data
      });
    });
  }

  render() {
    return (
      <ul className="list-group">
        {
          this.state.results.map((item) => {
            // create a route-able link for each product
            return (
              <li className="list-group-item" key={item.upc}>
                {item.name}
                {" ... "}
                <Link to={`/Nytreact/${item.upc}`}>view more</Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default Home;

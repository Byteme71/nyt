import React from "react";
import axios from "axios";

class Article extends React.Component {
  state = {
    articlesToSave:[]
  };

  componentDidMount() {

    axios.get(`/api/articles/`).then((response) => {

      console.log(response.data);


      this.setState({
            articlesToSave: response.data
      })
    });
  }

  // buyOne = () => {
  //   // make a put request to subtract one from quantity
  //   axios.put(`/api/Nytreacts/${this.props.match.params.id}`).then((response) => {
  //     // update state object with newest data
  //     this.setState({
  //       item: response.data
  //     });
  //   });
  // };

  render() {
    return (
      <div>
          <div className="row">
          <div className="col-md-12">
          {this.state.articlesToSave.map(item =>{

        return (
                    <div key={item._id}>
                      <div className = "card">
                        <div className="card-header">
                          {item.title}
                        </div>
                          <div className="card-body">
                            <p className="card-title">Publish Date: {item.date}</p>
                              <p className="card-text">
                              {item.snippet}
                              </p>
                              <p className="card-text"><a href={item.url} target="_blank">Article Link</a>
                              </p>
                                <a href="/savedArticles" className="btn btn-primary">Delete Article</a>
                          </div>
                      </div>
                    <br>
                    </br>
                    </div>
                  ) 


          })}
          </div>
          </div>
      </div>
    );
  }
}

export default Article;

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

  deleteArticle = (id) => {

    console.log("getting here or ?!")
    
    console.log("what is this id?!?!?!?!?!!?!?!?!", id)

    axios.delete(`/api/articles/${id}`).then((response) => {

        console.log("is this reeeeeeeeeeeeeeally the id",id)
      // this.setState({
      //   item: response.data
      // });
    });
  };

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
                                <a href="/savedArticles" className="btn btn-outline-danger" onClick={() => this.deleteArticle(item._id)}>Delete Article</a>
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

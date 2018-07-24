import React from "react";
import axios from "axios";

class Home extends React.Component {
  // initial form state
  state = {
    articles: [],
    articlesToSave:{
      title: "",
      date: "",
      snippet:"",
      url: ""
    }
  };

  // styles = {
  //   display: "none"
  // }

  handleInputChange = (event) => {
    // update any state property with the input value of the same name
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitNytreact = (event) => {
    event.preventDefault();
//  console.log("is this happening")
    // send the entire state object to the back-end
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=fc0296d021eb41eea4234990749bd552&query=${this.state.name}`).then(response => {
      // console.log("these are the results", response.data.response.docs)
      this.setState({
        articles:[]
      })

      if (response) {
        // clear state/input values
        this.setState({
          articles: response.data.response.docs
        });
        // console.log("are these the articles", this.state.articles)
      }
    });
  };

  saveArticles = id => {

  let articlesNew = this.state.articles.filter(article => article._id === id);
  let articleToDb = articlesNew[0];
    // Set this.state.friends equal to the new friends array
  console.log("is this being filtered or na", articlesNew[0]);

  console.log("is this the correct variable or NOT", articleToDb);

  console.log("NOPPPPEEEEEEEE", articleToDb.headline.main);

  console.log("YEPPPPP", articleToDb.pub_date);

   console.log("FIREEEEE", articleToDb.web_url);

    this.setState({
      articlesToSave:{
      title: articleToDb.headline.main,
      date: articleToDb.pub_date,
      snippet: articleToDb.snippet,
      url: articleToDb.web_url
      }
    },()=> {
      axios.post("/api/article", this.state.articlesToSave).then(response=>{
        if (response){
          console.log("article saved")
        }
      }).catch(err=>{
        console.log("error", err)
      }) 
    })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <form className="form" onSubmit={this.submitNytreact}>
              <input
                value={this.state.value}
                name="name"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Search some articles!"
                className="form-control"
              />
              <button className="btn btn-outline-primary mt-2">Search Articles</button>
            </form>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-12">
              {
                this.state.articles.map(item => {
                  console.log("what is this item", item)

                  return (
                    <div key={item._id}>
                      <div className = "card">
                        <div className="card-header">
                          {item.headline.main}
                        </div>
                          <div className="card-body">
                            <p className="card-title">Publish Date: {item.pub_date}</p>
                              <p className="card-text">
                              {item.snippet}
                              </p>
                              <p className="card-text"><a href={item.web_url} target="_blank">Article Link</a>
                              </p>
                                <a href="/savedArticles" className="btn btn-primary" onClick={() => this.saveArticles(item._id)}>Save Article</a>
                          </div>
                      </div>
                    <br>
                    </br>
                    </div>
                  ) 
                })
              }

            </div>
          </div>
        </div>
    );
  }
}

export default Home;

// Include React
import React from 'react';
// Helper for making AJAX requests to our API
import helpers from "../utils/helpers";

// Create the Child Component
class Results extends React.Component {

    constructor(props) {
        super(props);
          this.saveArticle = this.saveArticle.bind(this);
          this.state = {NYTArticles: ""};

    }

    saveArticle(article) {
                  console.log('inside saveArticle');
                  console.log(article);


                  helpers.postArticle(article).then(function () {
                              console.log("Updated!");

                              // After we've done the post... then get the updated history
                              helpers.getArticles().then(function (response) {
                                  console.log("Current History", response.data);

                                  console.log("History", response.data);

                                  // this.setState({savedArticles: response.data});

                              }.bind(this));
                          }.bind(this));



      }

    // Here we describe Search component's render method
    render() {
      let {NYTArticles} = this.props;
      let resutsDiv;
      if(NYTArticles.length > 0){
        resutsDiv = (
          NYTArticles.map(function(article, i) {
            // console.log(article);
            return (
          <div className="well clearfix" key={i}>
            <h2><strong>{article.headline.main}</strong></h2>
            <h5>{article.byline.original}</h5>
            <h5>{article.section_name}</h5>
            <h5><strong>Date Published:</strong> {article.pub_date}</h5>
            <button href="#" className="btn btn-default pull-right" id="{i}" type="button" onClick={() => this.saveArticle(article)}>Save</button>
            <a href={article.web_url} className="btn btn-default pull-right">View Article</a>

          </div>
        );
        //}.bind(this));
      },this)
        )
      } else{
        resutsDiv = (
          <div className="well">
            <h2><em>Enter search terms to begin...</em></h2>
          </div>
        )
      }

        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title"><i className="fa  fa-list-alt"></i> Results</h3>
            </div>
            <div className="panel-body">
              {resutsDiv}
            </div>
          </div>
        );
    }
}

// Export the component back for use in other files
export default Results;

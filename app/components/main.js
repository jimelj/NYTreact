// Include React
import React from "react"
// Here we include all Children
import Search from "./children/search";
import Results from "./children/results";
import Saved from "./children/saved";
// TODO: // Helper for making AJAX requests to our API

// Helper for making AJAX requests to our API
import helpers from "./utils/helpers";

// Creating the Main component
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {queryTerm: "", querySYear: "", queryEYear: "", NYTArticles: "",savedArticles: []}
  }
  // The moment the page renders get the History
    componentDidMount() {
        // Get the latest history.
        helpers.getArticles().then(function (response) {
            console.log(response);
            if (response !== this.state.articles) {
                console.log("Saved Articles", response.data);
                this.setState({savedArticles: response.data});
            }
        }.bind(this));
    }

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate() {

        // Run the query for the address
        helpers.runQuery(this.state.queryTerm,this.state.querySYear,this.state.queryEYear).then(function (NYTData) {
            if (NYTData !== this.state.NYTArticles) {
                console.log("NYTData", NYTData.docs);
                this.setState({NYTArticles: NYTData.docs});

                // // After we've received the result... then post the search term to our history.
                // //note all the .bind() - we need to make sure the helper functions have the
                // //correct context
                // helpers.postArticle(this.state.queryTerm).then(function () {
                //     console.log("Updated!");
                //
                //     // After we've done the post... then get the updated history
                //     helpers.getArticles().then(function (response) {
                //         console.log("Current Article", response.data);
                //
                //         console.log("Articles", response.data);
                //
                //         this.setState({savedArticles: response.data});
                //
                //     }.bind(this));
                // }.bind(this));
            }
        }.bind(this));
    }

    // This function allows childrens to update the parent.
  setQuery(query,sYear, eYear) {
      this.setState({
        queryTerm: query,
        querySYear: sYear,
        queryEYear: eYear

      });
  }


  // Render Page
  render() {
    return (
      <div>
        {/*Jumbotron*/}
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">NYT-React</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Search</a></li>
        <li><a href="#">Saved Articles</a></li>
      </ul>
    </div>
  </div>
</nav>
<div className='container'>
  <div className="row">
  <div className="jumbotron jumbo text-center">
    <h2><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
    <p>Search for and save articles of interest.</p>
  </div>
</div>
          <div className="row">
            <Search setQuery={this.setQuery.bind(this)}/>
          </div>
          <div className="row">
            <Results NYTArticles={this.state.NYTArticles}/>
          </div>
          <div className="row">
            <Saved articles={this.state.savedArticles}/>
          </div>
        </div>
      </div>

    );
  }
}

// Export the component back for use in other files
export default Main;

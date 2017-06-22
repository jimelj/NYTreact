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

  }

  // Render Page
  render() {
    return (
      <div>
        {/*Jumbotron*/}
        <div className="jumbotron jumbo text-center">
          <h1>
            <u>
              <i className="fa fa-newspaper-o" aria-hidden="true"></i>
              New York Times Article Scrubber</u>
          </h1>
          <h3>Search for and annotate articles of intrest</h3>
        </div>
        <div className='container'>
          <div className="row">
            <Search/>
          </div>
          <div className="row">
            <Results/>
          </div>
          <div className="row">
            <Saved/>
          </div>
        </div>
      </div>

    );
  }
}

// Export the component back for use in other files
export default Main;

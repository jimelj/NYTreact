// Include React
import React from 'react';

// Create the Child Component
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {query: "", sYear: "", eYear: ""}
    }
    // This function will respond to the user input
        handleChange(event) {

            // this.setState({query: event.target.value});
            // this.setState({sYear: event.target.value});
            // this.setState({eYear: event.target.value});
            let newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);

        }
        // When a user submits...
    handleSubmit(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.setQuery(this.state.query,this.state.sYear,this.state.eYear);
        this.setState({query: "", sYear: "", eYear: ""});
    }

    // Here we describe Search component's render method
    render() {
        return (

             <div className="panel panel-default">
                 <div className="panel-heading panel-s">
                     <h1 className="panel-title"><i className="fa fa-newspaper-o" aria-hidden="true"></i> Search</h1>
                 </div>
                 <div className="panel-body">
                     <form onSubmit={this.handleSubmit.bind(this)}>
                         <div className="form-group">
                             <label className="text-label"htmlFor="search">Topic</label>
                             <input
                               type="text"
                               className="form-control"
                               id="query"
                               value={this.state.query}
                               onChange={this.handleChange.bind(this)}
                               required
                             />
                         </div>
                         <div className="form-group">
                             <label className="text-label" htmlFor="startYear">Start Year</label>
                             <input
                               type="text"
                               className="form-control"
                               id="sYear"
                               value={this.state.sYear}
                               onChange={this.handleChange.bind(this)}
                               required
                             />
                         </div>
                         <div className="form-group">
                             <label className="text-label" htmlFor="endYear">End Year</label>
                             <input
                               type="text"
                               className="form-control"
                               id="eYear"
                               value={this.state.eYear}
                               onChange={this.handleChange.bind(this)}
                               required
                             />
                         </div>

                         <button type="submit" className="btn btn-warning pull-right" id="searchButton"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search</button>
                     </form>
                 </div>
             </div>
        );
    }
}

// Export the component back for use in other files
export default Search;

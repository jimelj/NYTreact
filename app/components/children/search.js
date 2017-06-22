// Include React
import React from 'react';

// Create the Child Component
class Search extends React.Component {

    constructor(props) {
        super(props);
    }


    // Here we describe Search component's render method
    render() {
        return (

             <div className="panel panel-default">
                 <div className="panel-heading panel-s text-center">
                     <h1 className="panel-title"><i className="fa  fa-list-alt"></i> Search</h1>
                 </div>
                 <div className="panel-body">
                     <form>
                         <div className="form-group text-center">
                             <label className="text-label"for="search">Topic</label>
                             <input type="text" className="form-control" id="search"/>
                         </div>
                         <div className="form-group text-center">
                             <label className="text-label" for="startYear">Start Year</label>
                             <input type="text" className="form-control" id="startYear"/>
                         </div>
                         <div className="form-group text-center">
                             <label className="text-label" for="endYear">End Year</label>
                             <input type="text" className="form-control" id="endYear"/>
                         </div>

                         <button type="submit" className="btn btn-default center-block" id="searchButton"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search</button>
                     </form>
                 </div>
             </div>
        );
    }
}

// Export the component back for use in other files
export default Search;

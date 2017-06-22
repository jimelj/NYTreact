// Include React
import React from 'react';

// Create the Child Component
class Saved extends React.Component {

    constructor(props) {
        super(props);
    }


    // Here we describe Search component's render method
    render() {
        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title"></h3>
            </div>
            <div className="panel-body">

            </div>
            <div className="panel-footer">

            </div>
          </div>
        );
    }
}

// Export the component back for use in other files
export default Saved;

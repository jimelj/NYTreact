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
              <h3 className="panel-title"><i className="fa  fa-list-alt"></i> Saved articles</h3>
            </div>
            <div className="panel-body">

              {this.props.articles.map(function(article, i) {
                return (
              <div className="well" key={i}>
                {article.title}
              </div>
            );
              })}
            </div>
          </div>
        );

    }
}

// Export the component back for use in other files
export default Saved;

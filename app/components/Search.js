// Dependencies
var React = require("react");

// Includes the two children
var Query = require("./Search/Query");
var Results = require("./Search/Results");
var helpers = require("../helpers/helpers");

var Search = React.createClass({


    // Include the helpers for making API Calls
    getInitialState: function(){
        return {
            "term": "Kobe",
            "start": "2016",
            "end": "2017",
            "results": {}
        };
    },

    // Runs the query with the initial state variables
    componentDidMount: function(){

        // Calls the axios helper query
        helpers.runQuery(this.state.term, this.state.start, this.state.end).then(function(data){
            this.setState({results: data.docs } )
        }.bind(this));

    },

    render: function(){


        return (

            <div className="applicationContainer">
                <Query />
                <Results results= {this.state.start}/>
            </div>
        )
    }
})

module.exports = Search;
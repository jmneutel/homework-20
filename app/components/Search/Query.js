var React = require('react');
var helpers = require('../../helpers/helpers');

var Query = React.createClass({
    mixins: [Router.History],
    getInitialState: function(){
        return{
            'term': "",
            'start': "",
            'end': ""
        }
    },

    handleChange: function(event){
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    handleSubmit: function(){

        this.props.updateSearch(this.state.term, this.state.start, this.state.end);
        return false;
    },

	render: function() {
		return(
		<div className = "applicationContainer">

                    <div className="row">
                    <div className="col-lg-12">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
                            </div>
                            <div className="panel-body">


                                <form>
                                    <div className="form-group">
                                        <h4 className=""><strong>Topic</strong></h4>
                                        <input type="text" className="form-control " id="search_topic" />

                                        <h4 className=""><strong>Start Year</strong></h4>
                                        <input type="text" className="form-control " id="search_start" />

                                        <h4 className=""><strong>End Year</strong></h4>
                                        <input type="text" className="form-control " id="search_end" />

                                    </div>


                                    <div className="pull-right">
                                        <button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

		)
	}
});

module.exports = Query;
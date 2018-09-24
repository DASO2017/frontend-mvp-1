import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: "",
            type: "",
            dateStart: "",
            dateEnd: "",
        }
    }

    handleSubmit = (event) => {

    }

    handleChange = (event) => {

    }

    render() {
        return (
            <form className="searchBlock" onSubmit={this.handleSubmit}>
                <h3>Where?</h3>
                <input data-type="location" value={this.state.location} type="text" onChange={this.handleChange}/>
                <h3>What?</h3>
                <input data-type="type" value={this.state.type} type="text" onChange={this.handleChange}/>
                <h3>When?</h3>
                <div className="timeSpan">
                    <input data-type="dateStart" value={this.state.dateStart} type="date" onChange={this.handleChange}/>
                    <div className="timeHyphen"></div>
                    <input data-type="dateEnd" value={this.state.dateEnd} type="date" onChange={this.handleChange}/>
                </div>
                <div className="btn">
                    <input type="submit" value="SEARCH IT"/>   
                </div>

            </form>
        );
    }
}

export default SearchForm;
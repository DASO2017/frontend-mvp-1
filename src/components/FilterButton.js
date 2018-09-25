import React, { Component } from 'react';
import sortIcon from '../images/icons/sort.svg';

class FilterButton extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <a href="#">
                <img src={sortIcon} alt="sort"/>
                <h3>{this.props.category}</h3>
            </a>
        );
    }
}

export default FilterButton;
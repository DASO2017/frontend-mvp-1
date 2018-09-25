import React, { Component } from 'react';
import background from '../images/background-header.jpg';
import SearchForm from './SearchForm';
import Eyecatcher from './Eyecatcher';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section className="header">
                <div className="headerBackground">
                    <img src={background} alt="header background"/>
                </div>
                <div className="headerWrapper">
                    <div className="headerContent">
                        <Eyecatcher hasReadMore={true}/>    
                        <div className="searchBlockWrapper">
                            <SearchForm />   
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
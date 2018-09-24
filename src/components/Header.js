import React, { Component } from 'react';
import background from '../images/background-header.jpg';
import eyecatcher from '../images/eyecatcher.png';
import readmore from '../images/read-more.png';
import SearchForm from './SearchForm';

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
                        <div className="eyeCatcherWrapper">
                            <div className="eyeCatcher">
                                <img src={eyecatcher} alt="eyecatcher"/>
                                <a href="#">
                                    <img src={readmore} alt="read-more"/>
                                </a>
                            </div>
                        </div>
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
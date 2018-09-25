import React, { Component } from 'react';
import eyecatcher from '../images/eyecatcher.png';
import readmore from '../images/read-more.png';

class Eyecatcher extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="eyeCatcherWrapper">
                {this.props.hasReadMore ? (
                    <div className="eyeCatcher">
                        <img src={eyecatcher} alt="eyecatcher"/>
                        <a href="#">
                            <img src={readmore} alt="read-more"/>
                        </a>
                    </div>
                ) : (
                    <div className="eyeCatcher">
                        <img src={eyecatcher} alt="eyecatcher"/>
                    </div>
                )}
            </div>
        );
    }
}

export default Eyecatcher;
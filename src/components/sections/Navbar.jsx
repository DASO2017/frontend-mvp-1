import React, { Component } from 'react';
import Logo from '../Logo';
import UserNav from '../UserNav';
import profilePicture from '../../images/profile.png';

class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            isAuthenticated: this.props.isAuthenticated,
        }
    }

    render() {
        return (
            <section className="navBar">
                <nav>
                    <div className="navWrapper">
                        <Logo />
                        <UserNav isAuthenticated={true} username={"Jenni"} profilePicture={profilePicture}/>
                    </div>
                </nav>
            </section>
        );
    }
}

export default Navbar;
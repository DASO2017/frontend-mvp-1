import React, { Component } from 'react';
import Logo from '../Logo';
import UserNav from '../UserNav';
import profilePicture from '../../images/profile.png';

class Navbar extends Component {
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
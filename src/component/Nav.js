import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <a className="navbar-brand">Shop CARS</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">View Cars<span class="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/addcars" className="nav-link">Add Cars</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}

export default Nav;
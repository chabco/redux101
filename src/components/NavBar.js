import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/main" className="nav-link active">Main</Link>
                </li>
                <li className="nav-item">
                    <Link to="/meat" className="nav-link">Meat</Link>
                </li>
                <li className="nav-item">
                    <Link to="/dairy" className="nav-link">Dairy</Link>
                </li>
                <li className="nav-item">
                    <Link to="/frozen" className="nav-link">Frozen</Link>
                </li>
            </ul>    
         );
    }
}
 
export default NavBar;
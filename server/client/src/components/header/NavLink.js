import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// https://www.turtle-techies.com/post/react-navbar-with-bootstrap-4/
class NavLink extends Component {

    render() {
        return (
          <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                    <Link 
                      className="nav-link" 
                      to={this.props.path}
                      onClick={() => this.props.onClick()}
                    >
                {this.props.text}</Link>
          </li>
        );
    }
}

export default NavLink;
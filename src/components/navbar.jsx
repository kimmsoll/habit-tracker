import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <header className="navbar">
                <i className="navbar__logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar__count">{this.props.totalCount}</span>
            </header>
        );
    }
}

export default Navbar;
import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }
    render() {
        // props 사용법
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <div className="habit--items">
                    <span className="habit--items__name">{name}</span>
                    <span className="habit--items__count">{count}</span>
                </div>
                <div className="habit--buttons">
                    <button className="habit--buttons__button habit--increase" onClick={this.handleIncrement}>
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <button className="habit--buttons__button habit--decrease" onClick={this.handleDecrement}>
                        <i className="fas fa-minus-square"></i>
                    </button>
                    <button className="habit--buttons__button habit--delete" onClick={this.handleDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        );
    }
}

export default Habit;
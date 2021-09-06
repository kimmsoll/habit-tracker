import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
/* Habits 는 Habit 의 부모 컴포넌트로,
Habit 에게 habit, handleIncrement 등의 인자를 전달한다
*/
class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    }
    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    }
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    }
    handleAdd = (name) => {
        this.props.onAdd(name);
    }
    handleReset = () => {
        this.props.onReset();
    }
    render() {
        return (
            <div className="habits">
            <HabitAddForm onAdd={this.handleAdd} />
            <ul>
                {this.props.habits.map((habit)=>(
                    // habit 이라는 props로 habit 전달
                    // key 는 고유한 값이어야 하므로, 배열 index 를 key 로 쓰면 안된다
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        onAdd={this.handleAdd}
                        onReset={this.handleReset}
                    />
                ))}
            </ul>
            <button className="reset--button" onClick={this.props.onReset}>
                Reset All
            </button>
            </div>
        );
    }
}

export default Habits;
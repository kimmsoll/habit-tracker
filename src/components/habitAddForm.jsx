import React, { memo } from "react";

const HabitAddForm = memo((props) => {
    const inputRef = React.createRef();
    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        // name 이 있다면 onAdd 함수에 전달
        name && props.onAdd(name);
        inputRef.current.value = "";
    }
    return (
        <form className="add--form" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                className="add--input"
                placeholder=" add your habit"
            />
            <button className="add--button">Add</button>
        </form>
    );
})

export default HabitAddForm;
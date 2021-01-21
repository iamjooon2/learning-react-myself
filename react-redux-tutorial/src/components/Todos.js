import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
    return (
        <div>
            <input type = "checkbox" />
            <span>sample text</span>
            <button>delete</button>
        </div>
    );
};

const Todos = ({
    input, //인풋에 입력되는 텍스트
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
};

export default Todos;
import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';


export class TodoList extends React.Component {
    render() {
        const { todos, onDeleteTodo, onToggleTodo, onUpdateTodo } = this.props;

        const todoElements = todos.map(
            (todo) => (
                <TodoItem
                    key={todo.id}
                    title={todo.title}
                    date={todo.date}
                    completed={todo.completed}
                    onDelete={
                        () => onDeleteTodo && onDeleteTodo(todo.id)
                    }
                    onToggle={
                        (completed) =>
                            onToggleTodo && onToggleTodo(todo.id, completed)
                    }
                    onUpdate={
                        (content) =>
                            onUpdateTodo && onUpdateTodo(todo.id, content)
                    }
                />
            )
        );

        return (
            <div className="todolist-container">
                <div className="todolist">{todoElements}</div>
            </div>
        );
    }
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func,
    onUpdateTodo: PropTypes.func,
};


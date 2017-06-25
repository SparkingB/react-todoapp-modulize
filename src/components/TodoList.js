import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';


export class TodoList extends React.Component {
    render() {
        const { todos, onDeleteTodo, onToggleTodo, onUpdateTodo } = this.props;

        const todoElements = todos[0].map(
            (todo) => {
                if (todos[1].length === 0 || (todos[1].length !== 0 && todo.title.indexOf(todos[1][0]) !== -1)) {
                    return <TodoItem
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
                }
                else {
                    return null;
                }
            }
        );
    
        return (
            <div className="todolist-container">
                <div className="todolist">{todoElements}</div>
            </div>
        );
    }
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.array).isRequired,
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func,
    onUpdateTodo: PropTypes.func,
};


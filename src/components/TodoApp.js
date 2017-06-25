import React from 'react';
import { connect } from 'react-redux';
import { TodoHeader } from './TodoHeader';
import { InputField } from './InputField';
import { TodoList } from './TodoList';
import { TodoActions } from '../actions/TodoActions';


class TodoApp extends React.Component {

    componentWillMount() {
        this.props.loadTodos();
    }

    render() {
        const {
            todos,
            createTodo,
            updateTodo,
            toggleTodo,
            deleteTodo,
            searchTodo
        } = this.props;

        return (
            <div className="container">
                <TodoHeader
                    title="Todo List"
                    todoCount={
                        todos[0].filter(
                            (todo) => !todo.completed
                        ).length
                    }
                />
                <InputField
                    placeholder="What needs to be done ?"
                    className="textin-field"
                    onSubmitEditing={createTodo}
                />
                <InputField
                    placeholder="Search ?"
                    className="search-field"
                    onChangeSearch={searchTodo}
                />
                <TodoList
                    todos={todos}
                    onDeleteTodo={deleteTodo}
                    onToggleTodo={toggleTodo}
                    onUpdateTodo={updateTodo}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({ todos: state.todos }),
    {
        loadTodos: TodoActions.loadTodos,
        createTodo: TodoActions.createTodo,
        updateTodo: TodoActions.updateTodo,
        toggleTodo: TodoActions.toggleTodo,
        deleteTodo: TodoActions.deleteTodo,
        searchTodo: TodoActions.searchTodo
    }
)(TodoApp)
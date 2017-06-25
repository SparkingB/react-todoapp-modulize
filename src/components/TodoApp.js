import React from 'react';
import { TodoHeader } from './TodoHeader';
import { InputField } from './InputField';
import { TodoList } from './TodoList';
import { _createTodo, _deleteTodo, _toggleTodo, _updateTodo, _search } from './util'

const API_DATA_URL = '/data.json';


export class TodoApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [],
            todosSearchBackUp: []
        };
    }

    componentWillMount() {
        fetch(API_DATA_URL)
            .then(
                (response) => {
                    // console.log(response);
                    return response.ok ? response.json() : Promise.reject(response.status);
                }
            )
            .then(
                (todos) => { this.setState({ todos: todos }) },
                (errlog) => (console.log(errlog))
            );
    }

    render() {
        const { todos, todosSearchBackUp } = this.state;
        return (
            <div className="container">
                <TodoHeader
                    title="Todo List"
                    todoCount={
                        todos.filter(
                            (todo) => !todo.completed
                        ).length
                    }
                />
                <InputField
                    placeholder="What needs to be done ?"
                    className="textin-field"
                    onSubmitEditing={
                        (title) => this.setState(
                            {
                                todos: _createTodo(todos, title)
                            }
                        )
                    }
                />
                <InputField
                    placeholder="Search ?"
                    className="search-field"
                    onChangeSearch={
                        (content) => {
                            const todosSBK = todosSearchBackUp.length === 0 ? todos : todosSearchBackUp;
                            const todosAry = _search(todosSBK, content, todosSBK);
                            this.setState(
                                {
                                    todos: todosAry[0],
                                    todosSearchBackUp: todosAry[1]
                                }
                            )
                        }
                    }
                />
                <TodoList
                    todos={todos}
                    onDeleteTodo={
                        (id) => this.setState({
                            todos: _deleteTodo(todos, id, todosSearchBackUp)
                        })
                    }
                    onToggleTodo={
                        (id, completed) => this.setState({
                            todos: _toggleTodo(todos, id, completed)
                        })
                    }
                    onUpdateTodo={
                        (id, title) => {
                            this.setState({
                                todos: _updateTodo(todos, id, title)
                            })
                        }
                    }
                />
            </div>
        );
    }
}


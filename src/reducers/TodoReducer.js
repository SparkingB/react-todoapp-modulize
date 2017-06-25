import ActionTypes from '../actions/ActionTypes';
import { _createTodo, _deleteTodo, _toggleTodo, _updateTodo, _searchTodo } from '../utils/util'


export const todos = (state = [[]], action) => {
    switch (action.type) {
        case ActionTypes.LOAD_TODOS_SUCCESS:
            return action.todos;
        case ActionTypes.CREATE_TODO:
            return _createTodo(state, action.title);
        case ActionTypes.UPDATE_TODO:
            return _updateTodo(state, action.id, action.title);
        case ActionTypes.TOGGLE_TODO:
            return _toggleTodo(state, action.id, action.completed);
        case ActionTypes.DELETE_TODO:
            return _deleteTodo(state, action.id);
        case ActionTypes.SEARCH_TODO:
            return _searchTodo(state, action.content);
        default:
            return state;
    }
};
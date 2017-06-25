import ActionTypes from './ActionTypes';

const API_DATA_URL = '/data.json';

export const TodoActions = {
  loadTodos() {
    return (dispatch) => {
      fetch(API_DATA_URL)
        .then(
          (response) => {
            // console.log(response);
            return response.ok ? response.json() : Promise.reject(response.status);
          }
        )
        .then(
          (todos) => dispatch({
            type: ActionTypes.LOAD_TODOS_SUCCESS,
            todos: [todos, []]
          }),
          (errlog) => (console.log(errlog))
        );
    };
  },
  createTodo(title) {
    return {
      type: ActionTypes.CREATE_TODO,
      title
    };
  },
  updateTodo(id, title) {
    return {
      type: ActionTypes.UPDATE_TODO,
      id,
      title
    };
  },
  toggleTodo(id, completed) {
    return {
      type: ActionTypes.TOGGLE_TODO,
      id,
      completed
    };
  },
  deleteTodo(id) {
    return {
      type: ActionTypes.DELETE_TODO,
      id
    };
  },
  searchTodo(content) {
    return {
      type: ActionTypes.SEARCH_TODO,
      content
    }
  }
};

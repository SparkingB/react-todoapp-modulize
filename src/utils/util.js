export const _createTodo = (todos, title) => {
    todos[0].push(
        {
            id: todos[0].length > 0 ? todos[0][todos[0].length - 1].id + 1 : 0,
            title,
            completed: false,
            date: _getDate()
        }
    );

    return [todos[0],todos[1]];
};

export const _updateTodo = (todos, id, title) => {
    const idx = todos[0].findIndex((todo) => todo.id === id);
    if (idx === -1) return todos[0];

    todos[0][idx].title = title;

    return [todos[0],todos[1]];
};

export const _toggleTodo = (todos, id, completed) => {
    const idx = todos[0].findIndex((todo) => todo.id === id);
    if (idx === -1) return todos;

    todos[0][idx].completed = completed;

    return [todos[0],todos[1]];
};

export const _deleteTodo = (todos, id) => {
    const idx = todos[0].findIndex((todo) => todo.id === id);
    if (idx === -1) return todos;

    todos[0].splice(idx, 1);
    return [todos[0],todos[1]];
};


export const _searchTodo = (todos, content) => {
    return [
        todos[0],
        [content]
    ];
}

export const _getDate = () => {
    const dt = new Date();
    let year = dt.getFullYear();
    let month = dt.getMonth() + 1;
    if (month < 10) month = "0" + month;

    let day = dt.getDate();
    if (day < 10) day = "0" + day;

    let hour = dt.getHours()
    if (hour < 10) hour = "0" + hour;

    let minute = dt.getMinutes();
    if (minute < 10) minute = "0" + minute;

    let dtFormat = year + '-' + month + '-' + day + '  ' + hour + ':' + minute;

    return dtFormat;
}
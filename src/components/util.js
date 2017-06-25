

export const _createTodo = (todos, title) => {
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    todos.push(
        {
            id: id,
            title,
            completed: false,
            date: _getDate()
        }
    );
    return todos;
};

export const _deleteTodo = (todos, id, todosSearchBackUp) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    const idxSBK = todosSearchBackUp.findIndex((todosSearchBackUp) => todosSearchBackUp.id === id);
    if (idx !== -1) {
        todos.splice(idx, 1);
        todosSearchBackUp.splice(idxSBK, 1);
    }
    return todos;
};

export const _toggleTodo = (todos, id, completed) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) target.completed = completed;
    return todos;
};

export const _updateTodo = (todos, id, title) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) todos[idx].title = title;
    return todos;
};

export const _search = (todos, content, todosSearchBackUp) => {
    if (content) {
        const targetAry = todos.filter((el) => (el.title.indexOf(content) >= 0 ? true : false));

        return [targetAry, todosSearchBackUp];
    }
    else {
        return [todosSearchBackUp, []];
    }

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

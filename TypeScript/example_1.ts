import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, status: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has the title of: ${title}
    Is it finished??: ${status}
    `);
}
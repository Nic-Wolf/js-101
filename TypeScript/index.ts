import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.ID;
    const title = todo.title;
    const finished = todo.finished; // intentionally wrong.

    console.log(`
    The Todo with ID: ${ID}
    Has the title of: ${title}
    Is it finished??: ${finished}
    `);
});
import { defineStore } from "pinia";

export const useTodoStore = defineStore('TodoStore', {
    // state

    state: () => ({
        todos: [
            { id: 1, title: 'Todo 1', completed: false },
            { id: 2, title: 'Todo 2', completed: false },
            { id: 3, title: 'Todo 3', completed: false },
            { id: 4, title: 'Todo 4', completed: false },
            { id: 5, title: 'Todo 5', completed: false },
        ]
    }),

    // actions

    actions: {
        addTodo(todo) {
            this.todo.push(todo);
        },
    }
    // getters

});
export default {
    getProjectTodoById: store => (todoId, project) => {
        return store.todos.find(({ id, projectId }) => id === todoId && projectId === project);
    },
    getProjectTodos: store => project => store.todos.filter(({ projectId }) => projectId === project),
}

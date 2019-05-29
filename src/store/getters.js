export default {
    project: store => store.projects.find(({ id }) => id === store.selectedProject),
    projects: store => store.projects.map(project => ({
        ...project,
        todo: project.todos.filter(({ done }) => !done).length,
        done: project.todos.filter(({ done }) => done).length,
    })),
    todo: (store, getters) => {
        if (!getters.project) {
            return null;
        }
        return getters.project.todos.find(({ id }) => id === store.selectedToDo);
    },
}
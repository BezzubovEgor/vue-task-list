export default {
    getProjectById: store => selectedProject => store.projects.find(({ id }) => id === selectedProject),
    projects: (store, { getProjectTodos }) => store.projects.map(project => ({
        ...project,
        todo: getProjectTodos(project.id).filter(({ done }) => !done).length,
        done: getProjectTodos(project.id).filter(({ done }) => done).length,
    })),
}

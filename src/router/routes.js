import ProjectsPage from "../components/projects/ProjectsPage";
import ToDoPage from "../components/todos/ToDoPage";
import ToDoDetails from "../components/todos/ToDoDetails.vue";
import AboutPage from "../components/about/AboutPage";
import NotFoundPage from "../components/core/errors/NotFoundPage";


const ROUTES = {
    MAIN: { name: "main", path: "/", redirect: "/projects", props: true },
    PROJECTS: { name: "projects", path: "/projects", component: ProjectsPage, props: true },
    PROJECT: { name: "project-details", path: "/projects/:projectId/todos", component: ToDoPage, props: true },
    TODO_DETAILS: { name: "todo-details", path: "/project/:projectId/todos/:todoId", component: ToDoDetails, props: true },
    ABOUT: { name: "about", path: "/about", component: AboutPage, props: true },
    NOT_FOUND: { name: "not-found", path: "/not-found", component: NotFoundPage, props: true },
}

const ROUTES_LIST = [
    ...Object.values(ROUTES),
    { path: "*", redirect: ROUTES.NOT_FOUND.path },
];


export default ROUTES;
export { ROUTES_LIST };

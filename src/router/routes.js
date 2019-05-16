import ProjectsPage from "../components/projects/ProjectsPage";
import ToDoPage from "../components/todos/ToDoPage";
import AboutPage from "../components/about/AboutPage";
import NotFoundPage from "../components/core/errors/NotFoundPage";

const ROUTES = {
    MAIN: { name: "main", path: "/", redirect: "/projects", props: true },
    PROJECTS: { name: "projects", path: "/projects", component: ProjectsPage, props: true },
    PROJECT: { name: "project", path: "/projects/:projectId", component: ToDoPage, props: true },
    ABOUT: { name: "about", path: "/about", component: AboutPage, props: true },
    NOT_FOUND: { name: "not-found", path: "/not-found", component: NotFoundPage, props: true },
}

const ROUTES_LIST = [
    ROUTES.MAIN,
    ROUTES.PROJECTS,
    ROUTES.PROJECT,
    ROUTES.ABOUT,
    ROUTES.NOT_FOUND,
    { path: "*", redirect: ROUTES.NOT_FOUND.path },
];

export default ROUTES;
export { ROUTES_LIST };

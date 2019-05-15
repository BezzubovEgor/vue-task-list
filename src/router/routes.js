import ListsPage from "../components/lists/ListsPage";
import ToDoPage from "../components/todos/ToDoPage";
import AboutPage from "../components/about/AboutPage";
import NotFoundPage from "../components/core/errors/NotFoundPage";

const ROUTES = [
    { path: "/", redirect: "/lists/todos" },
    { path: "/lists", component: ListsPage },
    { path: "/lists/:list", component: ToDoPage },
    { path: "/about", component: AboutPage },
    { path: "*", component: NotFoundPage },
];

export default ROUTES;
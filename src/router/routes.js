import ListsPage from "../components/lists/ListsPage";
import ToDoPage from "../components/todos/ToDoPage";
import About from "../components/about/About";
import NotFound from "../components/core/errors/NotFound";

const ROUTES = [
    { path: "/", redirect: "/lists/todos" },
    { path: "/lists", component: ListsPage },
    { path: "/lists/:list", component: ToDoPage },
    { path: "/about", component: About },
    { path: "*", component: NotFound },
];

export default ROUTES;
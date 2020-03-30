import ListsPage from "../components/lists/ListsPage";
import ToDoPage from "../components/todos/ToDoPage";
import ToDoDetails from "../components/todos/ToDoDetails.vue";
import AboutPage from "../components/about/AboutPage";
import NotFoundPage from "../components/core/errors/NotFoundPage";


const ROUTES = {
    MAIN: { name: "main", path: "/", redirect: "/lists", props: true },
    LISTS: { name: "lists", path: "/lists", component: ListsPage, props: true },
    LIST: { name: "list-details", path: "/lists/:listId/todos", component: ToDoPage, props: true },
    TODO_DETAILS: { name: "todo-details", path: "/list/:listId/todos/:todoId", component: ToDoDetails, props: true },
    ABOUT: { name: "about", path: "/about", component: AboutPage, props: true },
    NOT_FOUND: { name: "not-found", path: "/not-found", component: NotFoundPage, props: true },
}

const ROUTES_LIST = [
    ...Object.values(ROUTES),
    { path: "*", redirect: ROUTES.NOT_FOUND.path },
];


export default ROUTES;
export { ROUTES_LIST };

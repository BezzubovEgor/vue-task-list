import routes from '../router/routes';

const menu = [{
    title: 'Lists',
    icon: 'fas fa-list',
    to: routes.MAIN.path,
}, {
    title: 'About this app',
    icon: 'fas fa-question-circle',
    to: routes.ABOUT.path,
}]

export default menu;
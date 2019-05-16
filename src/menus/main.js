import routes from '../router/routes';

const menu = [{
    title: 'Project list',
    icon: 'fas fa-list',
    to: routes.MAIN.path,
}, {
    title: 'About this app',
    icon: 'fas fa-question-circle',
    to: routes.ABOUT.path,
}]

export default menu;
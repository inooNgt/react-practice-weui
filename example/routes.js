import asyncComponent from './components/AsyncComponent';

const routes = [
  {
    path: '/',
    exact: true,
    component: asyncComponent(() => import('./pages/home'))
  },
  {
    path: '/buttons',
    component: asyncComponent(() => import('./pages/buttons'))
  },
  { path: '/msg', component: asyncComponent(() => import('./pages/msg')) }
];

export default routes;

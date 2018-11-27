import asyncComponent from './components/AsyncComponent';

const routes = [
  {
    path: '/',
    exact: true,
    component: asyncComponent(() => import('./pages/home'))
  },
  { path: '/msg', component: asyncComponent(() => import('./pages/msg')) },
  { path: '/', component: asyncComponent(() => import('./pages/toast')) }
];
export default routes;

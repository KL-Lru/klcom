import { RouteConfig, RouteKey } from 'types/routes';

export const routings: Record<RouteKey, RouteConfig> = {
  top: {
    label: 'Top',
    path: '/',
    exact: true,
  },
  sign_in: {
    label: 'Sign in',
    path: '/signin',
    exact: true,
  },
  note: {
    label: 'Note',
    path: '/notes',
    exact: true,
  },
  works: {
    label: 'Work',
    path: '/works',
    exact: true,
  },
};

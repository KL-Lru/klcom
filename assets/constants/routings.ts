import { RouteConfig, RouteKey } from 'types/routes';

export const routings: Record<RouteKey, RouteConfig> = {
  top: {
    label: 'Top',
    path: '/',
    exact: true,
    intoNav: true,
    metas: [{ variant: 'title', value: 'Top' }],
  },
  sign_in: {
    label: 'Sign in',
    path: '/signin',
    exact: true,
    metas: [{variant: 'title', value: 'Sign In'}]
  },
  note: {
    label: "Note",
    path: "/notes",
    exact: true,
    intoNav: true,
    metas: [{variant: 'title', value: 'Note'}]
  },
  works: {
    label: "Work",
    path: '/works',
    exact: true,
    intoNav: true,
    metas: [{variant: 'title', value: "Works"}]
  },
}

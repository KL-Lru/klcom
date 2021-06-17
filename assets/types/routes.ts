export type RouteKey = 
  'top' | 'sign_in' | "note" |"works";

export type RouteConfig = {
  label: string;
  path: string;
  exact: boolean;
};

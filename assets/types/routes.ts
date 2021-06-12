import { ReactNode } from 'react';
import { MetaConfig } from './meta';

export type RouteKey = 
  'top' | 'sign_in' | "note" |"works";

export type RouteConfig = {
  label: string;
  path: string;
  exact: boolean;
  intoNav?: boolean;
  metas?: MetaConfig[];
};

export type RouteComponentMap = Record<RouteKey, ReactNode>

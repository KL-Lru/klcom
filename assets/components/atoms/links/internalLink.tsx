import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { Link } from 'components/atoms';
import { ElementRef } from 'types/forwardRef';

// eslint-disable-next-line react/display-name
const LinkBehavior: ElementRef<'a', RouterLinkProps> = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink ref={ref} {...props} />
));

type Props = {
  to: string;
  className?: string;
  children?: React.ReactNode;
}

export const InternalLink: React.VFC<Props> = (props) => (
  <Link component={LinkBehavior} {...props} />
)

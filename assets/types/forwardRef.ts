import {ForwardRefExoticComponent, PropsWithRef } from "react";

export type ElementRef<
  T extends keyof JSX.IntrinsicElements,
  S = PropsWithRef<
    JSX.IntrinsicElements[T]
  >,
> = 
ForwardRefExoticComponent<
  PropsWithRef<
    JSX.IntrinsicElements[T]
  > & S
>;

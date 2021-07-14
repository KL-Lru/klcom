declare namespace Prism {
  type ComponentEntry = {
    title: string;
    owner: string;
    noCSS: boolean;
    alias: string | string[];
    aliasTitles: Record<string, string>;
  };
  type ComponentCategory = Record<string, ComponentEntry | string>
  type Components = Record<string, ComponentCategory>;    

  type LoaderFunction = <T>(loadComponent: (id: string) => T, chainer?: LoadChainer<T>) => T;
  type LoadChainer<T> = {
    series: (before: T, after: () => T) => T;
    parallel: (values: T[]) => T;
  }
}

declare module 'prismjs/dependencies' {
  const useLoader: (components: Prism.Components, load: string[], loaded: string[]) => {load: Prism.LoaderFunction};
  export = useLoader;
}

declare module 'prismjs/components' {
  const components: Prism.Components;
  export = components;
}


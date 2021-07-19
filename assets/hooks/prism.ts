import { RefObject, useEffect } from 'react';
import Prism from 'prismjs';
import components from 'prismjs/components';
import useLoader from 'prismjs/dependencies';
import 'prismjs/themes/prism-okaidia.css';

type PrismHook = {
  highlightAll: (async?: boolean | undefined, callback?: Prism.HighlightCallback | undefined) => void;
  highlight: (ref: RefObject<HTMLPreElement | HTMLSourceElement>) => void;
  tokenize: (lang: string, text: string) => (string | Prism.Token)[];
};

export const usePrism = (): PrismHook => {
  useEffect(() => {
    const loader = useLoader(components, ['cpp', 'javascript'], []);
    loader.load((id: string) => {
      import(`prismjs/components/prism-${id}.min`);
    });
  }, []);

  const highlightAll = Prism.highlightAll;

  const highlight = (ref: RefObject<HTMLPreElement | HTMLSourceElement>) => {
    if(ref.current) Prism.highlightElement(ref.current);
  }

  const tokenize = (lang: string, text: string) => {
    const grammer = Prism.languages[lang] || Prism.languages.javascript as Prism.Grammar;
    return Prism.tokenize(text, grammer);
  }

  return {
    highlightAll,
    highlight,
    tokenize,
  }
};

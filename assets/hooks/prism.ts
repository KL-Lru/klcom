import { useEffect } from 'react';
import Prism from 'prismjs';
import components from 'prismjs/components';
import useLoader from 'prismjs/dependencies';
import 'prismjs/plugins/toolbar/prism-toolbar.min';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/show-language/prism-show-language.min';
import 'prismjs/themes/prism-okaidia.css';

export const usePrism = (): void => {
  useEffect(() => {
    const loader = useLoader(components, ['cpp', 'javascript'], []);
    loader.load((id: string) => {
      import(`prismjs/components/prism-${id}.min`);
    });
    Prism.highlightAll();
  }, []);
};

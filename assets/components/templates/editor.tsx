import React, { CSSProperties, useEffect, useImperativeHandle, useRef, useState } from 'react';
import * as monaco from  'monaco-editor/esm/vs/editor/editor.api';

type EditorInstance = ReturnType<typeof monaco.editor.create>;
export type EditorRef = {
  editor: EditorInstance | null;
}

type Props = {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  value?: string;
  defaultValue?: string;
  language: string;
  theme: string;
  options?: monaco.editor.IEditorOptions;
  onChange?: (currentValue: string) => void;
}

// eslint-disable-next-line react/display-name
export const Editor = React.forwardRef<EditorRef, Props>((props, ref) => {
  const {width = '100%', height = '50em', value = '', defaultValue = '', language='markdown', theme, options, onChange} = props;
  const [body, setBody] = useState<string>(defaultValue);
  const container = useRef<HTMLDivElement | null>(null);
  const editor = useRef<EditorInstance | null>(null);
  useImperativeHandle(ref, () => ({editor: editor.current}));

  useEffect(() => {
    if(container.current == null) return;
    editor.current = monaco.editor.create(container.current, {
      value: body, 
      language,
      ...options,
    });
    if (theme) {
      monaco.editor.setTheme(theme);
    }
    editor.current.onDidChangeModelContent(() => {
      if (editor.current && onChange){
        const valueCurrent = editor.current.getValue();
        onChange(valueCurrent);
      }
    });

  }, []);

  useEffect(() => {
    if (value != body && editor.current != null) {
      setBody(value);
      editor.current.setValue(value);
      if(onChange) onChange(body);
    }
  }, [value])

  return <div ref={container} style={{width, height}}/>;
});

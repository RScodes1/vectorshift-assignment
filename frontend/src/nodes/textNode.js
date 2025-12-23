import { useRef, useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  const [variables, setVariables] = useState([]);

  const VARIABLE_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
 
  const extractVariables = (text) => {
  const matches = [...text.matchAll(VARIABLE_REGEX)];
  return [...new Set(matches.map(m => m[1]))];
};


  const  handleTextChange = (e) => {
    setCurrText(e.target.value)

    const vars = extractVariables(e.target.value);
      setVariables(vars);


     if (textareaRef.current) {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }
  }

  const inputs = variables.map((variable, index) => ({
        id: `${id}-${variable}`,
        position: Position.Left,
        style: {
          top: `${((index + 1) * 100) / (variables.length + 1)}%`,
        },
      }));
  
  return (
    <BaseNode
      title="Text"
       inputs={inputs}
      outputs={[
        { id: `${id}-output` }
      ]}
    >
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
        />

      </label>
    </BaseNode>
  );
};

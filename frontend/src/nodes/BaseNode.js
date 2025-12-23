import { Handle, Position } from 'reactflow';

export default function BaseNode({ title, children, inputs = [], outputs = [] }) {
   
  return (
    <div className="node">
      <div className="node-header">{title}</div>

      <div className="node-body">
        {children}
      </div>

      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={input.position || Position.Left}
          id={input.id}
          style={input.style}
          className="node-handle"
        />
      ))}

      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={output.position || Position.Right}
          id={output.id}
          style={output.style}
          className="node-handle"
        />
      ))}
    </div>
  );
}

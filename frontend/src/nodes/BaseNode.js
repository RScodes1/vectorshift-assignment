import { Handle, Position } from 'reactflow';

export default function BaseNode({ title, children, inputs = [], outputs = [] }) {
  return (
    <div style={{ width: 200, border: '1px solid black', padding: 8 }}>
      
      <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
        {title}
      </div>

      <div>
        {children}
      </div>

      {inputs.map((input) => (
        <Handle
            key={input.id}
            type="target"
            position={input.position || Position.Left}
            id={input.id}
            style={input.style}
            />

      ))}

      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={output.position || Position.Right}
          id={output.id}
         style={output.style}
        />
      ))}
    </div>
  );
}

// draggableNode.js

const CORE_NODE_TYPES = [
  'customInput',
  'llm',
  'customOutput',
  'text',
];

const coreToolbarStyle = {
  cursor: 'grab',
  minWidth: '80px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '8px',
  backgroundColor: '#1C2536',
};

const extensionToolbarStyle = {
  cursor: 'grab',
  minWidth: '80px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '8px',
  backgroundColor: '#F4F6FA',
  border: '1px dashed #94A3B8',
};


export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  const isCoreNode = CORE_NODE_TYPES.includes(type);

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={isCoreNode ? coreToolbarStyle : extensionToolbarStyle}
      draggable
    >
      <span style={{ color: isCoreNode ? '#fff' : '#1C2536' }}>
        {label}
      </span>
    </div>
  );
};

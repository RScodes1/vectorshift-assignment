import BaseNode from '../BaseNode';

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      title="Logger"
      inputs={[{ id: `${id}-in` }]}
    >
      <span>Logs data</span>
    </BaseNode>
  );
};

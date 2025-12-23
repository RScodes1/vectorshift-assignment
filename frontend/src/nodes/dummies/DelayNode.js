import BaseNode from '../BaseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
    >
      <span>Delays execution</span>
    </BaseNode>
  );
};

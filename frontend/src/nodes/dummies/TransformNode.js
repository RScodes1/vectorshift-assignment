import BaseNode from '../BaseNode';

export const TransformNode = ({ id }) => {
  return (
    <BaseNode
      title="Transform"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
    >
      <span>Transforms input</span>
    </BaseNode>
  );
};

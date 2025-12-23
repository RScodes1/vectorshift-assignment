import BaseNode from '../BaseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[{ id: `${id}-in` }]}
      outputs={[
        { id: `${id}-true` },
        { id: `${id}-false` }
      ]}
    >
      <span>Evaluates a condition</span>
    </BaseNode>
  );
};

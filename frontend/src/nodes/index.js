import { TextNode } from './textNode';
import { InputNode } from './inputNode';
import { OutputNode } from './outputNode';
import { ConditionNode } from './dummies/ConditionNode';
import { DelayNode } from './dummies/DelayNode';
import { MergeNode } from './dummies/MergeNode';
import { LoggerNode } from './dummies/LoggerNode';
import { TransformNode } from './dummies/TransformNode';
import { LLMNode } from './llmNode';


export const nodeTypes = {
  text: TextNode,
  input: InputNode,
  output: OutputNode,
  llm: LLMNode,
  condition: ConditionNode,
  delay: DelayNode,
  merge: MergeNode,
  logger: LoggerNode,
  transform: TransformNode,
};

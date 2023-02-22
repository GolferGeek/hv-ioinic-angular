import {Owner} from './owner.model'

export default interface Thought {
  id: string;
  title: string;
  markdown: string;
  owner: Owner;
  tags: string;
  created: Date;
  lastUpdated: Date;
  ParentThought: Thought;
  ChildThoughts: Thought[];

}

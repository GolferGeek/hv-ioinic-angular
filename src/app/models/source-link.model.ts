import User from './user.model'
import Arc from './arc.model'
import Refutation from './refutation.model'

export default interface SourceLink {
  _id: string;
  title: string;
  elevator: string;
  markdown: string;
  owner: User;
  collaborators: User[];
  viewers: User[];
  tags: string[];
  publishedDate: string;
  arcs: Arc[];
  refutations: Refutation[];
}

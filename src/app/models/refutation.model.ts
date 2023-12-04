import User from './user.model'
import Arc from './arc.model'

export default interface Refutation {
        _id: string;
        arc: Arc
        title: string;
        elevator: string;
        markdown: string;
        owner: User;
        collaborators: User[];
        viewers: User[];
        tags: string[];
        publishedDate: string;
        comments: Comment[];
        children: Refutation[];
        parent: Refutation;
}

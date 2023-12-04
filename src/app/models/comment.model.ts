import User from './user.model'
import Arc from './arc.model'
import Refutation from './refutation.model'

export default interface Comment {
        _id: string;
        arc: Arc;
        refutation: Refutation;
        title: string;
        markdown: string;
        owner: User;
        publishedDate: string;
        children: Comment[];
        parent: Comment;
}

import { Observable, of } from 'rxjs';
import { Post } from '../../app/interfaces/post';
import { delayResponse } from '../utils';
import { posts as dbPosts } from '../database/posts';

export function getLatestPosts(limit: number): Observable<Post[]> {
    return delayResponse(of(dbPosts.slice(0, limit)));
}

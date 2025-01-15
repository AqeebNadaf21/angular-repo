import { Observable } from 'rxjs';
import { Post } from '../../interfaces/post';
import { BlogCategory } from '../../interfaces/category';

export interface GetBlogCategoriesOptions {
    depth?: number;
}

export abstract class BlogApi {
    abstract getLatestPosts(limit: number): Observable<Post[]>;

    abstract getCategories(options: GetBlogCategoriesOptions): Observable<BlogCategory[]>;
}

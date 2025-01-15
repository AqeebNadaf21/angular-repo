import { Injectable } from '@angular/core';
import { BlogApi, GetBlogCategoriesOptions } from '../base';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/post';
import { BlogCategory } from '../../interfaces/category';
import { getBlogCategories, getLatestPosts } from '../../../fake-server/endpoints';

@Injectable()
export class FakeBlogApi extends BlogApi {
    getLatestPosts(limit: number): Observable<Post[]> {
        return getLatestPosts(limit);
    }

    getCategories(options: GetBlogCategoriesOptions): Observable<BlogCategory[]> {
        return getBlogCategories(options);
    }
}

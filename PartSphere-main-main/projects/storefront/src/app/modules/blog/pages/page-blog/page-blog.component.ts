import { Component, OnInit } from '@angular/core';
import { blogPosts } from '../../../../../data/blog-posts';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostCardLayout } from '../../../shared/components/post-card/post-card.component';

export type PageBlogLayout = 'classic' | 'grid' | 'list';

export type PageBlogSidebarPosition = 'start' | 'end';

export interface PageBlogData {
    layout: PageBlogLayout;
    sidebarPosition: PageBlogSidebarPosition;
}

@Component({
    selector: 'app-page-blog',
    templateUrl: './page-blog.component.html',
    styleUrls: ['./page-blog.component.scss'],
})
export class PageBlogComponent implements OnInit {
    layout: PageBlogLayout = 'grid';

    sidebarPosition: PageBlogSidebarPosition = 'end';

    posts = blogPosts;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        const data$ = this.route.data as Observable<PageBlogData>;

        data$.subscribe((data: PageBlogData) => {
            this.layout = data.layout;
            this.sidebarPosition = data.sidebarPosition;
        });
    }

    getPostCardLayout(): PostCardLayout {
        const map: {[K in PageBlogLayout]: PostCardLayout} = {
            classic: 'grid',
            list: 'list',
            grid: 'grid-sm',
        };

        return map[this.layout];
    }
}

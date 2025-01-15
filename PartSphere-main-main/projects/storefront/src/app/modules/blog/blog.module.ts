import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
// modules (third-party)
import { TranslateModule } from '@ngx-translate/core';
// modules
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { BlogSidebarComponent } from './components/blog-sidebar/blog-sidebar.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

// pages
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { PagePostComponent } from './pages/page-post/page-post.component';

// widgets
import { WidgetAboutUsComponent } from './widgets/widget-about-us/widget-about-us.component';
import { WidgetCommentsComponent } from './widgets/widget-comments/widget-comments.component';
import { WidgetNewsletterComponent } from './widgets/widget-newsletter/widget-newsletter.component';
import { WidgetPostsComponent } from './widgets/widget-posts/widget-posts.component';
import { WidgetSearchComponent } from './widgets/widget-search/widget-search.component';
import { WidgetTagsComponent } from './widgets/widget-tags/widget-tags.component';


@NgModule({
    declarations: [
        // components
        BlogSidebarComponent,
        CommentsListComponent,
        // pages
        PageBlogComponent,
        PagePostComponent,
        // widgets
        WidgetAboutUsComponent,
        WidgetCommentsComponent,
        WidgetNewsletterComponent,
        WidgetPostsComponent,
        WidgetSearchComponent,
        WidgetTagsComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
        // modules (third-party)
        TranslateModule.forChild(),
        // modules
        BlogRoutingModule,
        SharedModule,
    ],
})
export class BlogModule { }

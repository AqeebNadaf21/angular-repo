import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { PagePostComponent } from './pages/page-post/page-post.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PageBlogComponent,
        data: {
            layout: 'classic',
            sidebarPosition: 'end',
        },
    },
    {
        path: 'post',
        component: PagePostComponent,
        data: {
            featuredImage: true,
            sidebarPosition: false,
        },
    },
    // The following routes are for demo only.
    {
        path: 'classic-right-sidebar',
        component: PageBlogComponent,
        data: {
            layout: 'classic',
            sidebarPosition: 'end',
        },
    },
    {
        path: 'classic-left-sidebar',
        component: PageBlogComponent,
        data: {
            layout: 'classic',
            sidebarPosition: 'start',
        },
    },
    {
        path: 'grid-right-sidebar',
        component: PageBlogComponent,
        data: {
            layout: 'grid',
            sidebarPosition: 'end',
        },
    },
    {
        path: 'grid-left-sidebar',
        component: PageBlogComponent,
        data: {
            layout: 'grid',
            sidebarPosition: 'start',
        },
    },
    {
        path: 'list-right-sidebar',
        component: PageBlogComponent,
        data: {
            layout: 'list',
            sidebarPosition: 'end',
        },
    },
    {
        path: 'list-left-sidebar',
        component: PageBlogComponent,
        data: {
            layout: 'list',
            sidebarPosition: 'start',
        },
    },
    {
        path: 'post-full-width',
        component: PagePostComponent,
        data: {
            featuredImage: true,
            sidebarPosition: false,
        },
    },
    {
        path: 'post-right-sidebar',
        component: PagePostComponent,
        data: {
            featuredImage: true,
            sidebarPosition: 'end',
        },
    },
    {
        path: 'post-left-sidebar',
        component: PagePostComponent,
        data: {
            featuredImage: true,
            sidebarPosition: 'start',
        },
    },
    {
        path: 'post-without-image',
        component: PagePostComponent,
        data: {
            featuredImage: false,
            sidebarPosition: false,
        },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }

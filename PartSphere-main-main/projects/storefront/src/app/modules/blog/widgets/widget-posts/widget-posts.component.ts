import { Component, HostBinding, Input } from '@angular/core';
import { Post } from '../../../../interfaces/post';

@Component({
    selector: 'app-widget-posts',
    templateUrl: './widget-posts.component.html',
    styleUrls: ['./widget-posts.component.scss'],
})
export class WidgetPostsComponent {
    @Input() posts: Post[] = [];

    @Input() widgetTitle: string = '';

    @HostBinding('class.card') classCard = true;

    @HostBinding('class.widget') classWidget = true;

    @HostBinding('class.widget-posts') classWidgetPosts = true;

    constructor() { }
}

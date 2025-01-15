import { Component, HostBinding, Input } from '@angular/core';
import { WidgetComment } from '../../../../interfaces/comment';

@Component({
    selector: 'app-widget-comments',
    templateUrl: './widget-comments.component.html',
    styleUrls: ['./widget-comments.component.scss'],
})
export class WidgetCommentsComponent {
    @Input() comments: WidgetComment[] = [];

    @Input() widgetTitle: string = '';

    @HostBinding('class.card') classCard = true;

    @HostBinding('class.widget') classWidget = true;

    @HostBinding('class.widget-comments') classWidgetComments = true;

    constructor() { }
}

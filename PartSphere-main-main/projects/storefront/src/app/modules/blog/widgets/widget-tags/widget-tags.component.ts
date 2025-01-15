import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-widget-tags',
    templateUrl: './widget-tags.component.html',
    styleUrls: ['./widget-tags.component.scss'],
})
export class WidgetTagsComponent {
    @Input() widgetTitle: string = '';

    @HostBinding('class.card') classCard = true;

    @HostBinding('class.widget') classWidget = true;

    @HostBinding('class.widget-tags') classWidgetTags = true;

    constructor() { }
}

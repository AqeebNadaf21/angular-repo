import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-widget-newsletter',
    templateUrl: './widget-newsletter.component.html',
    styleUrls: ['./widget-newsletter.component.scss'],
})
export class WidgetNewsletterComponent {
    @HostBinding('class.widget') classWidget = true;

    @HostBinding('class.widget-newsletter') classWidgetNewsletter = true;

    constructor() { }
}

import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-widget-search',
    templateUrl: './widget-search.component.html',
    styleUrls: ['./widget-search.component.scss'],
})
export class WidgetSearchComponent {
    @HostBinding('class.card') classCard = true;

    @HostBinding('class.widget') classWidget = true;

    @HostBinding('class.widget-search') classWidgetSearch = true;

    constructor() { }
}

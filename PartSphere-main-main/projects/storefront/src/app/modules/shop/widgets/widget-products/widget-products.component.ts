import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../../../../interfaces/product';
import { UrlService } from '../../../../services/url.service';

@Component({
    selector: 'app-widget-products',
    templateUrl: './widget-products.component.html',
    styleUrls: ['./widget-products.component.scss'],
})
export class WidgetProductsComponent {
    @Input() widgetTitle: string = '';

    @Input() products: Product[] = [];

    @HostBinding('class.card') classCard = true;

    @HostBinding('class.widget') classWidget = true;

    @HostBinding('class.widget-products') classWidgetProducts = true;

    constructor(
        public url: UrlService,
    ) { }
}

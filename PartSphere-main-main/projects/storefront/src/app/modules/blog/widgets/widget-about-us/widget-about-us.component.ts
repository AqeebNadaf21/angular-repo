import { Component, HostBinding } from '@angular/core';
import { theme } from '../../../../../data/theme';

@Component({
    selector: 'app-widget-about-us',
    templateUrl: './widget-about-us.component.html',
    styleUrls: ['./widget-about-us.component.scss'],
})
export class WidgetAboutUsComponent {
    socialLinks = [
        { name: 'rss', icon: 'fas fa-rss', url: theme.author.profile_url },
        { name: 'youtube', icon: 'fab fa-youtube', url: theme.author.profile_url },
        { name: 'facebook', icon: 'fab fa-facebook-f', url: theme.author.profile_url },
        { name: 'twitter', icon: 'fab fa-twitter', url: theme.author.profile_url },
        { name: 'instagram', icon: 'fab fa-instagram', url: theme.author.profile_url },
    ];

    @HostBinding('class.card') classCard = true;

    @HostBinding('class.widget') classWidget = true;

    @HostBinding('class.widget-about-us') classWidgetAboutUs = true;

    constructor() { }
}

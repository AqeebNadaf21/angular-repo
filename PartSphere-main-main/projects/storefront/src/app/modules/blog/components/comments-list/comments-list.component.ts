import { Component, Input } from '@angular/core';
import { Comment } from '../../../../interfaces/comment';

@Component({
    selector: 'app-comments-list',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent {
    @Input() comments: Comment[] = [];

    @Input() level = 0;

    constructor() { }
}

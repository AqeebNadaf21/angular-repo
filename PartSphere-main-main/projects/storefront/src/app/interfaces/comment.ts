export interface Comment {
    id: number;
    avatar: string;
    author: string;
    text: string;
    date: string;
    children?: Comment[];
}

export interface WidgetComment {
    id: number;
    author: string;
    postTitle: string;
    text: string;
    date: string;
}

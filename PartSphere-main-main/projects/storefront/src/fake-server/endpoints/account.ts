import { Observable, of, throwError, timer } from 'rxjs';
import { User } from '../../app/interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { EditProfileData } from '../../app/api/base';

function error(message: string): HttpErrorResponse {
    return new HttpErrorResponse({
        status: 400,
        statusText: 'Bad Request',
        error: { message },
    });
}

function delayResponse<T>(input: Observable<T>): Observable<T> {
    return timer(500).pipe(mergeMap(() => input));
}

export function accountSignIn(email: string, password: string): Observable<User> {
    if (email === 'red-parts@example.com' && password === '123456') {
        const user: User = {
            email: 'red-parts@example.com',
            phone: '38 972 588-42-36',
            firstName: 'Ryan',
            lastName: 'Ford',
            avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
        };

        return delayResponse(of(user));
    }

    return delayResponse(throwError(error('AUTH_WRONG_PASSWORD')));
}

export function accountSignUp(email: string, password: string): Observable<User> {
    if (!/^.+@.+$/.test(email)) {
        return delayResponse(throwError(error('AUTH_INVALID_EMAIL')));
    }

    if (email === 'red-parts@example.com') {
        return delayResponse(throwError(error('AUTH_EMAIL_ALREADY_IN_USE')));
    }

    if (password.length < 6) {
        return delayResponse(throwError(error('AUTH_WEAK_PASSWORD')));
    }

    const user: User = {
        email,
        phone: '38 972 588-42-36',
        firstName: 'Ryan',
        lastName: 'Ford',
        avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
    };

    return delayResponse(of(user));
}

export function accountSignOut(): Observable<void> {
    return of(void null);
}

export function accountEditProfile(data: EditProfileData): Observable<User> {
    const user: User = {
        email: data.email,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
    };

    return delayResponse(of(user));
}

export function accountChangePassword(oldPassword: string, newPassword: string): Observable<void> {
    if (newPassword.length < 6) {
        return delayResponse(throwError(error('AUTH_WEAK_PASSWORD')));
    }

    return delayResponse(of(void null));
}

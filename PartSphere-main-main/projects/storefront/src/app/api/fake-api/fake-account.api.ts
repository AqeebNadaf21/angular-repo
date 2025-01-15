import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AccountApi, EditAddressData, EditProfileData, GetOrdersListOptions } from '../base';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { tap } from 'rxjs/operators';
import { Address } from '../../interfaces/address';
import { OrdersList } from '../../interfaces/list';
import { Order } from '../../interfaces/order';
import {
    accountChangePassword,
    accountEditProfile,
    accountSignIn,
    accountSignOut,
    accountSignUp,
    addAddress,
    delAddress,
    editAddress,
    getAddress,
    getAddresses,
    getDefaultAddress,
    getOrderById,
    getOrderByToken,
    getOrdersList,
} from '../../../fake-server/endpoints';


@Injectable()
export class FakeAccountApi extends AccountApi {
    private userSubject: BehaviorSubject<User | null>;

    get user(): User | null { return this.userSubject.value; }

    readonly user$: Observable<User | null>;

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
    ) {
        super();

        let storedUser = null;

        if (isPlatformBrowser(this.platformId)) {
            storedUser = localStorage.getItem('user');
            storedUser = storedUser ? JSON.parse(storedUser) : null;
        }

        this.userSubject = new BehaviorSubject<User | null>(storedUser);
        this.user$ = this.userSubject.asObservable();
    }

    signIn(email: string, password: string): Observable<User> {
        return accountSignIn(email, password).pipe(
            tap(user => this.setUser(user)),
        );
    }

    signUp(email: string, password: string): Observable<User> {
        return accountSignUp(email, password).pipe(
            tap(user => this.setUser(user)),
        );
    }

    signOut(): Observable<void> {
        return accountSignOut().pipe(
            tap(() => this.setUser(null)),
        );
    }

    editProfile(data: EditProfileData): Observable<User> {
        return accountEditProfile(data).pipe(
            tap(user => this.setUser(user)),
        );
    }

    changePassword(oldPassword: string, newPassword: string): Observable<void> {
        return accountChangePassword(oldPassword, newPassword);
    }

    addAddress(data: EditAddressData): Observable<Address> {
        return addAddress(data);
    }

    editAddress(addressId: number, data: EditAddressData): Observable<Address> {
        return editAddress(addressId, data);
    }

    delAddress(addressId: number): Observable<void> {
        return delAddress(addressId);
    }

    getDefaultAddress(): Observable<Address> {
        return getDefaultAddress();
    }

    getAddress(addressId: number): Observable<Address> {
        return getAddress(addressId);
    }

    getAddresses(): Observable<Address[]> {
        return getAddresses();
    }

    getOrdersList(options?: GetOrdersListOptions): Observable<OrdersList> {
        return getOrdersList(options);
    }

    getOrderById(id: number): Observable<Order> {
        return getOrderById(id);
    }

    getOrderByToken(token: string): Observable<Order> {
        return getOrderByToken(token);
    }

    private setUser(user: User|null): void {
        this.userSubject.next(user);

        localStorage.setItem('user', JSON.stringify(user));
    }
}

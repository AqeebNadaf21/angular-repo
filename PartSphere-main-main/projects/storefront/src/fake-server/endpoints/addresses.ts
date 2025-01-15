import { Address } from '../../app/interfaces/address';
import { addresses, getId } from '../database/addresses';
import { Observable, of } from 'rxjs';
import { clone, delayResponse } from '../utils';
import { EditAddressData } from '../../app/api/base';

export function getDefaultAddress(): Observable<Address> {
    return of(clone(addresses.find(x => x.default) || null));
}

export function getAddress(addressId: number): Observable<Address> {
    return of(clone(addresses.find(x => x.id === addressId) || null));
}

export function getAddresses(): Observable<Address[]> {
    return of(clone(addresses));
}

export function addAddress(data: EditAddressData): Observable<Address> {
    const address: Address = {
        id: getId(),
        ...{
            firstName: '',
            lastName: '',
            company: '',
            country: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            postcode: '',
            email: '',
            phone: '',
            default: false,
        },
        ...data,
    };

    if (addresses.length < 1) {
        address.default = true;
    }

    if (address.default) {
        addresses.forEach(x => x.default = false);
    }

    addresses.push(address);

    return delayResponse(of(address));
}

export function editAddress(addressId: number, data: EditAddressData): Observable<Address> {
    const address = addresses.find(x => x.id === addressId);

    if (!address) {
        throw new Error('Address not found');
    }

    address.firstName = data.firstName;
    address.lastName = data.lastName;
    address.company = data.company;
    address.country = data.country;
    address.address1 = data.address1;
    address.address2 = data.address2;
    address.city = data.city;
    address.state = data.state;
    address.postcode = data.postcode;
    address.email = data.email;
    address.phone = data.phone;
    address.default = data.default;

    if (address.default) {
        addresses.forEach(x => x.default = x.id === addressId);
    }

    return delayResponse(of(address));
}

export function delAddress(addressId: number): Observable<void> {
    const index = addresses.findIndex(x => x.id === addressId);

    if (index !== -1) {
        const address = addresses.splice(index, 1)[0];

        if (address.default && addresses.length > 0) {
            addresses[0].default = true;
        }
    }

    return delayResponse(of(void null));
}

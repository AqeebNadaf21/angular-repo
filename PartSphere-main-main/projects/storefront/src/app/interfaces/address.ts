export interface AddressData {
    firstName: string;
    lastName: string;
    company: string;
    country: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postcode: string;
    email: string;
    phone: string;
}

export interface Address extends AddressData {
    id: number;
    default: boolean;
}

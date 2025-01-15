import { Address } from '../../app/interfaces/address';

let lastId = 0;

export function getId(): number {
    return ++lastId;
}

export const addresses: Address[] = [
    {
        id: getId(),
        firstName: 'Ryan',
        lastName: 'Ford',
        company: 'Stroyka',
        country: 'RAND',
        address1: 'ul. Varshavskaya, 15-2-178',
        address2: '',
        city: 'Moscow',
        state: 'Moscow',
        postcode: '115302',
        email: 'stroyka@example.com',
        phone: '38 972 588-42-36',
        default: true,
    },
    {
        id: getId(),
        firstName: 'Jupiter',
        lastName: 'Saturnov',
        company: 'Stroyka',
        country: 'LAND',
        address1: 'Sun Orbit, 43.3241-85.239',
        address2: '',
        city: 'MarsGrad',
        state: 'MarsGrad',
        postcode: '4b4f53',
        email: 'jupiter@example.com',
        phone: 'ZX 971 972-57-26',
        default: false,
    },
];

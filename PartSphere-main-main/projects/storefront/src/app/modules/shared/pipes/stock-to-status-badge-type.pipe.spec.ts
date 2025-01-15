import { StockToStatusBadgeTypePipe } from './stock-to-status-badge-type.pipe';

describe('StockToStatusBadgeTypePipe', () => {
    it('create an instance', () => {
        const pipe = new StockToStatusBadgeTypePipe();
        expect(pipe).toBeTruthy();
    });
});

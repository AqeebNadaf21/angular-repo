import { StockToStatusBadgeTextPipe } from './stock-to-status-badge-text.pipe';

describe('StockToStatusBadgeTextPipe', () => {
    it('create an instance', () => {
        const pipe = new StockToStatusBadgeTextPipe();
        expect(pipe).toBeTruthy();
    });
});

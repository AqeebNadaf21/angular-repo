import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountApi, BlogApi, CountriesApi, ShopApi, VehicleApi } from '../base';
import { FakeAccountApi } from './fake-account.api';
import { FakeBlogApi } from './fake-blog.api';
import { FakeCountriesApi } from './fake-countries.api';
import { FakeShopApi } from './fake-shop.api';
import { FakeVehicleApi } from './fake-vehicle.api';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        { provide: AccountApi, useClass: FakeAccountApi },
        { provide: BlogApi, useClass: FakeBlogApi },
        { provide: CountriesApi, useClass: FakeCountriesApi },
        { provide: ShopApi, useClass: FakeShopApi },
        { provide: VehicleApi, useClass: FakeVehicleApi },
    ],
})
export class FakeApiModule { }

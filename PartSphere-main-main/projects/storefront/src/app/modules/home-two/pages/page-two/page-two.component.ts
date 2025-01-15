import { Component, OnInit } from '@angular/core';
import { BlogApi, ShopApi } from '../../../../api';
import { Post } from '../../../../interfaces/post';
import { BehaviorSubject, EMPTY, Observable, of, timer } from 'rxjs';
import { Brand } from '../../../../interfaces/brand';
import { filter, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Product } from '../../../../interfaces/product';
import { SectionHeaderGroup } from '../../../shared/components/section-header/section-header.component';
import { ShopCategory } from '../../../../interfaces/category';

interface ProductsCarouselGroup extends SectionHeaderGroup {
    products$: Observable<Product[]>;
}

interface ProductsCarouselData {
    subject$: BehaviorSubject<ProductsCarouselGroup>;
    products$: Observable<Product[]>;
    loading: boolean;
    groups: ProductsCarouselGroup[];
}

interface DeferredData<T> {
    loading: boolean;
    data$: Observable<T>;
}

@Component({
    selector: 'app-page-two',
    templateUrl: './page-two.component.html',
    styleUrls: ['./page-two.component.scss'],
})
export class PageTwoComponent implements OnInit {
    brands$: Observable<Brand[]> = of([]);

    popularCategories$: Observable<ShopCategory[]> = of([]);

    featuredProducts!: ProductsCarouselData;

    blockSale!: DeferredData<Product[]>;

    latestPosts!: DeferredData<Post[]>;

    columnTopRated$!: Observable<Product[]>;
    columnSpecialOffers$!: Observable<Product[]>;
    columnBestsellers$!: Observable<Product[]>;

    constructor(
        private shopApi: ShopApi,
        private blogApi: BlogApi,
    ) { }

    ngOnInit(): void {
        this.brands$ = this.shopApi.getBrands({ limit: 16 });

        this.popularCategories$ = this.shopApi.getCategories({
            slugs: [
                'headlights-lighting',
                'fuel-system',
                'body-parts',
                'interior-parts',
                'tires-wheels',
                'engine-drivetrain',
            ],
            depth: 1,
        });

        this.featuredProducts = this.makeCarouselData([
            {
                label: 'All',
                products$: this.shopApi.getFeaturedProducts(null, 8),
            },
            {
                label: 'Power Tools',
                products$: this.shopApi.getFeaturedProducts('power-tools', 8),
            },
            {
                label: 'Hand Tools',
                products$: this.shopApi.getFeaturedProducts('hand-tools', 8),
            },
            {
                label: 'Plumbing',
                products$: this.shopApi.getFeaturedProducts('plumbing', 8),
            },
        ]);

        this.blockSale = this.makeDeferredData(this.shopApi.getSpecialOffers(8));

        this.latestPosts = this.makeDeferredData(this.blogApi.getLatestPosts(8));

        this.columnTopRated$ = this.shopApi.getTopRatedProducts(null, 3);
        this.columnSpecialOffers$ = this.shopApi.getSpecialOffers(3);
        this.columnBestsellers$ = this.shopApi.getPopularProducts(null, 3);
    }

    groupChange(carousel: ProductsCarouselData, group: SectionHeaderGroup): void {
        carousel.subject$.next(group as ProductsCarouselGroup);
    }

    private makeCarouselData(groups: ProductsCarouselGroup[]): ProductsCarouselData {
        const subject = new BehaviorSubject<ProductsCarouselGroup>(groups[0]);
        const carouselData: ProductsCarouselData = {
            subject$: subject,
            products$: subject.pipe(
                filter(x => x !== null),
                tap(() => carouselData.loading = true),
                switchMap(group => group.products$),
                tap(() => carouselData.loading = false),
            ),
            loading: true,
            groups,
        };

        return carouselData;
    }

    private makeDeferredData<T>(dataSource: Observable<T>): DeferredData<T> {
        const data = {
            loading: true,
            data$: EMPTY as Observable<T>,
        };

        data.data$ = timer(0).pipe(mergeMap(() => dataSource.pipe(tap(() => data.loading = false))));

        return data;
    }
}

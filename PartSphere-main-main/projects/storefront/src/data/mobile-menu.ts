import { MobileMenuLink } from '../app/interfaces/mobile-menu-link';

export const mobileMenuLinks: MobileMenuLink[] = [
    {
        title: 'Home',
        url: '/',
        submenu: [
            { title: 'Home One', url: '/' },
            { title: 'Home Two', url: '/home-two' },
            {
                title: 'Header Spaceship',
                url: '/header-spaceship-variant-one',
                submenu: [
                    { title: 'Variant One', url: '/header-spaceship-variant-one' },
                    { title: 'Variant Two', url: '/header-spaceship-variant-two' },
                    { title: 'Variant Three', url: '/header-spaceship-variant-three' },
                ],
            },
            {
                title: 'Header Classic',
                url: '/header-classic-variant-one',
                submenu: [
                    { title: 'Variant One', url: '/header-classic-variant-one' },
                    { title: 'Variant Two', url: '/header-classic-variant-two' },
                    { title: 'Variant Three', url: '/header-classic-variant-three' },
                    { title: 'Variant Four', url: '/header-classic-variant-four' },
                    { title: 'Variant Five', url: '/header-classic-variant-five' },
                ],
            },
            {
                title: 'Mobile Header',
                url: '/mobile-header-variant-one',
                submenu: [
                    { title: 'Variant One', url: '/mobile-header-variant-one' },
                    { title: 'Variant Two', url: '/mobile-header-variant-two' },
                ],
            },
        ],
    },
    {
        title: 'Shop',
        url: '/shop/shop-grid-4-sidebar',
        submenu: [
            {
                title: 'Category',
                url: '/shop/category',
                submenu: [
                    { title: '3 Columns Sidebar', url: '/shop/category-columns-3-sidebar' },
                    { title: '4 Columns Sidebar', url: '/shop/category-columns-4-sidebar' },
                    { title: '5 Columns Sidebar', url: '/shop/category-columns-5-sidebar' },
                    { title: '4 Columns Full', url: '/shop/category-columns-4-full' },
                    { title: '5 Columns Full', url: '/shop/category-columns-5-full' },
                    { title: '6 Columns Full', url: '/shop/category-columns-6-full' },
                    { title: '7 Columns Full', url: '/shop/category-columns-7-full' },
                    { title: 'Right Sidebar', url: '/shop/category-right-sidebar' },
                ],
            },
            {
                title: 'Shop Grid',
                url: '/shop/shop-grid-4-sidebar',
                submenu: [
                    { title: '6 Columns Full', url: '/shop/shop-grid-6-full' },
                    { title: '5 Columns Full', url: '/shop/shop-grid-5-full' },
                    { title: '4 Columns Full', url: '/shop/shop-grid-4-full' },
                    { title: '4 Columns Sidebar', url: '/shop/shop-grid-4-sidebar' },
                    { title: '3 Columns Sidebar', url: '/shop/shop-grid-3-sidebar' },
                ],
            },
            { title: 'Shop List', url: '/shop/shop-list' },
            { title: 'Shop Table', url: '/shop/shop-table' },
            { title: 'Shop Right Sidebar', url: '/shop/shop-right-sidebar' },
            {
                title: 'Product',
                url: '/shop/product-full',
                submenu: [
                    { title: 'Full Width', url: '/shop/product-full' },
                    { title: 'Left Sidebar', url: '/shop/product-sidebar' },
                ],
            },
            { title: 'Cart', url: '/shop/cart' },
            { title: 'Checkout', url: '/shop/checkout' },
            { title: 'Order Success', url: '/shop/order-success' },
            { title: 'Wishlist', url: '/shop/wishlist' },
            { title: 'Compare', url: '/shop/compare' },
            { title: 'Track Order', url: '/shop/track-order' },
        ],
    },
    {
        title: 'Blog',
        url: '/blog',
        submenu: [
            {
                title: 'Blog Classic',
                url: '/blog/classic-right-sidebar',
                submenu: [
                    { title: 'Left Sidebar', url: '/blog/classic-left-sidebar' },
                    { title: 'Right Sidebar', url: '/blog/classic-right-sidebar' },
                ],
            },
            {
                title: 'Blog List',
                url: '/blog/list-right-sidebar',
                submenu: [
                    { title: 'Left Sidebar', url: '/blog/list-left-sidebar' },
                    { title: 'Right Sidebar', url: '/blog/list-right-sidebar' },
                ],
            },
            {
                title: 'Blog Grid',
                url: '/blog/grid-right-sidebar',
                submenu: [
                    { title: 'Left Sidebar', url: '/blog/grid-left-sidebar' },
                    { title: 'Right Sidebar', url: '/blog/grid-right-sidebar' },
                ],
            },
            {
                title: 'Post Page',
                url: '/blog/post-full-width',
                submenu: [
                    { title: 'Full Width', url: '/blog/post-full-width' },
                    { title: 'Left Sidebar', url: '/blog/post-left-sidebar' },
                    { title: 'Right Sidebar', url: '/blog/post-right-sidebar' },
                ],
            },
            { title: 'Post Without Image', url: '/blog/post-without-image' },
        ],
    },
    {
        title: 'Account',
        url: '/account',
        submenu: [
            { title: 'Login & Register', url: '/account/login' },
            { title: 'Dashboard', url: '/account/dashboard' },
            { title: 'Garage', url: '/account/garage' },
            { title: 'Edit Profile', url: '/account/profile' },
            { title: 'Order History', url: '/account/orders' },
            { title: 'Order Details', url: '/account/order-details' },
            { title: 'Address Book', url: '/account/addresses' },
            { title: 'Edit Address', url: '/account/edit-address' },
            { title: 'Change Password', url: '/account/password' },
        ],
    },
    {
        title: 'Pages',
        url: '/site/about-us',
        submenu: [
            { title: 'About Us', url: '/site/about-us' },
            { title: 'Contact Us v1', url: '/site/contact-us-v1' },
            { title: 'Contact Us v2', url: '/site/contact-us-v2' },
            { title: '404', url: '/site/not-found' },
            { title: 'Terms And Conditions', url: '/site/terms' },
            { title: 'FAQ', url: '/site/faq' },
            { title: 'Components', url: '/site/components' },
            { title: 'Typography', url: '/site/typography' },
        ],
    },
    {
        title: 'Buy Theme',
        url: 'https://themeforest.net/item/redparts-auto-parts-angular-template/27087440',
        external: true,
        customFields: {
            highlight: true,
        },
    },
];

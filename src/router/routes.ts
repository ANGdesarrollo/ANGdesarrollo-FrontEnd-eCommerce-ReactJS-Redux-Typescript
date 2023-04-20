import { HomeContainer } from '../pages/home/HomeContainer';
import { ProductsContainer } from '../pages/products/ProductsContainer';
import { ReturnPolicy } from '../pages/returnPolicy/ReturnPolicy';
import { ContactContainer } from '../pages/contact/ContactContainer';
import { DetailProductContainer } from '../pages/detailProducts/DetailProductContainer';
import { CartContainer } from '../pages/cart/CartContainer';

interface Route {
    name: string;
    to: string;
    path: string;
    Component: () => JSX.Element;
}
// PublicRoutes
export const routes: Route[] = [
    {
        name: 'home',
        to: '/',
        path: '/',
        Component: HomeContainer,
    },
    {
        name: 'products',
        to: '/products/:category',
        path: '/products/:category',
        Component: ProductsContainer,
    },
    {
        name: 'cart',
        to: '/cart',
        path: '/cart',
        Component: CartContainer,
    },
    {
        name: 'productsDetail',
        to: '/products/:category/:id',
        path: '/products/:category/:id',
        Component: DetailProductContainer,
    },
    {
        name: 'return policy',
        to: '/returnPolicy',
        path: '/returnPolicy',
        Component: ReturnPolicy,
    },
    {
        name: 'contact',
        to: '/contact',
        path: '/contact',
        Component: ContactContainer,
    },
];


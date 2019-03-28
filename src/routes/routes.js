import Home from './../components/home/Home';
import About from './../components/about/About';
import Blog from './../components/blog/Blog';
import Product from './../components/product/Product';
import Cart from './../components/cart/Cart';
import Order from './../components/order/Order';
import Login from './..//components/login/Login';
import Register from './../components/register/Register';
import Contact from './../components/contact/Contact';
import DetailProduct from './../components/detailProduct/DetailProduct';
import DetailBlog from './../components/blog/DetailBlog';
import ListProduct from './../components/product/ListProduct';

const routes = {
    route: [
        {
            path: '/', exact: true, component: Home
        },
        {
            path: '/about', exact: true, component: About
        },
        {
            path: '/blog', exact: true, component: Blog
        },
        {
            path: '/login', exact: true, component: Login
        },
        {
            path: '/order', exact: true, component: Order
        },
        {
            path: '/register', exact: true, component: Register
        },
        {
            path: '/contact', exact: true, component: Contact
        },
        {
            path: '/cart', exact: true, component: Cart
        },
        {
            path: '/product', exact: true, component: Product
        },
        {
            path: '/detailproduct', exact: true, component: DetailProduct
        },
        {
            path: '/detailblog', exact: true, component: DetailBlog
        },
        {
            path: '/productlist', exact: true, component: ListProduct
        }
    ]
}
export default routes;
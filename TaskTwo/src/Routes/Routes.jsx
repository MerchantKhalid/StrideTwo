import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layoyt/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import ProductDetails from '../Pages/Home/Products/ProductDetails';
import AddProduct from '../Pages/Home/Products/AddProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/addproduct',
        element: <AddProduct />,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);
export default router;

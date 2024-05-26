import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layoyt/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';

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
    ],
  },
]);
export default router;
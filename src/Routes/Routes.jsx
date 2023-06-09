import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home/Home';
import ToyDetails from '../Pages/ToyDetails';
import PrivateRoute from './PrivateRoute';
import AllToys from '../Pages/AllToys/AllToys';
import AddAToy from '../Pages/AddAToy';
import MyToys from '../Pages/MyToys/MyToys';
import Notfound from '../Pages/Notfound';
import Blog from '../Pages/Blog';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/toyDetails/:id',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://action-toys-server-taupe.vercel.app/toy/${params.id}`)
            },
            {
                path: '/allToys',
                element: <AllToys />,
                // loader: () => fetch("http://localhost:5000/toys")
            },
            {
                path: 'addAToy',
                element: <PrivateRoute><AddAToy /></PrivateRoute>
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: 'blogs',
                element: <Blog />
            },
            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '*',
        element: <Notfound />
    }
])

export default routes;
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
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: '/allToys',
                element: <AllToys />,
                // loader: () => fetch("http://localhost:5000/toys")
            },
            {
                path: 'addAToy',
                element: <AddAToy />
            },
            {
                path: 'myToys',
                element: <MyToys />
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
    }
])

export default routes;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
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
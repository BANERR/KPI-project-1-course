import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';

//Pages
import SocialEngineering from './pages/socialEngineering'
import Src from './pages/src'
import LoadTestingYourSite from './pages/loadTestingYourSite'

const router = createBrowserRouter([
  {
    path: '',
    element: <Src/>
  },
  {
    path: '/socialEngineering',
    element: <SocialEngineering/>
  },
  {
    path: '/loadTestingYourSite',
    element: <LoadTestingYourSite/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


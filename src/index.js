import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Menupage from './pages/Menupage';
import Faqs from './pages/Faqs';
import Vision from './pages/Vision';
import Layout from './components/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'  element={<Layout />}>
        <Route path=''  element={<Homepage />}/>
        <Route path='menu'  element={<Menupage />}/>
        <Route path='faqs'  element={<Faqs />}/>
        <Route path='vision'  element={<Vision />}/>
        </Route>
    )    
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>        
        <RouterProvider router={router} />
    </React.StrictMode>
);



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/Layout/AppLayout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Country } from './pages/Country';
import { About } from './pages/About';
import { ErrorPage } from './pages/ErrorPage';
import React from 'react';
import './App.css';

const router = createBrowserRouter([
 {path:'/', 
  element:<AppLayout/>, 
  errorElement:<ErrorPage/>,
  children:[
    { path: '/', element: <Home /> },
    { path: 'contact', element: <Contact /> },
    { path: 'country', element: <Country /> },
    { path: 'about', element: <About /> },
  ]}
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
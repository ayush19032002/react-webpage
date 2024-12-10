import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './home'
import Blog from './blog';
import About from './about';
import Resource from './resource'
import Contact from './contact'
import Header from './header';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter([
  { path: "/", element: <><Header /> <App /></> },
  { path: "/home", element: <><Header /> <Home /></> },
  { path: "/blog", element: <><Header /> <Blog /></> },
  { path: "/about", element: <><Header /> <About /></> },
  { path: "/resource", element: <><Header /> <Resource /></> },
  { path: "/contact", element: <><Header /> <Contact /></> },
])

root.render(
  <RouterProvider router={routes} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

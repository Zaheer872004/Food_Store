import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Restaurant from './components/Top-Restaurant.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet /> {/* Renders the matched route component */}
      </main>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Layout for the app
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/top-restaurant",
        element: <Restaurant />,
      },
      // Add more routes here if needed
    ],
    errorElement: <Error />, // Error handling for the entire layout
  }
]);

export default function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './pages/Navbar'
// import Body from './components/Body'
// import Home from './components/Home'
// import Contact from './components/Contact'
// import Error from './components/Error';
// import About from './components/About';
// import Cart from './components/Cart';
// import ResturantsMenu from './components/ResturantsMenu';
import {useRouteError ,createBrowserRouter, RouterProvider, useOutlet, Outlet } from 'react-router-dom'

 const AppLayout = () => {
  return (
      <>
      <Navbar />
      <Outlet />
      </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Body/>
    //   },
    //   {
    //     path: "/home",
    //     element: <Home />,
    //     errorElement:<Error/>,
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact />,
    //     errorElement:<Error/>,
    //   },
    //   {
    //     path: "/about",
    //     element: <About />,
    //     errorElement:<Error/>,
    //   },
    //   {
    //       path: "/cart",
    //       element: <Cart />,
    //       errorElement:<Error/>,
    //     },
    //     {
    //       path: "/restaurants/:resId",
    //       element: < ResturantsMenu />,
    //       errorElement:<Error/>,
    //     },
    // ],
      // errorElement: <Error />,
  }
  


]);

// export default App;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
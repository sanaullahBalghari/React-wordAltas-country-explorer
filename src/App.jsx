import { useState } from 'react'
import './App.css'
import { AppLayout } from './components/Layout/AppLayout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Country } from './Pages/Country';
import { ErrorPage } from './Pages/ErrorPage';
import { CountryDetails } from './components/Layout/CountryDetail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([

  {
    path:"/",
    element:<AppLayout/>,

    errorElement:<ErrorPage/>,
    children:[
 {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "country/:id",
    element: <CountryDetails />
  },
  {
    path: "country",
    element: <Country />
  },
    
]
}
]);

function App() {
  return <RouterProvider router={router} > </RouterProvider>
}

export default App;

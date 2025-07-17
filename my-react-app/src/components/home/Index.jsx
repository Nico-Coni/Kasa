// import { useState } from 'react'
import '../../styles/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Single } from '../rental/Rental.jsx'
import { Layout } from '../commun/Layout.jsx'
import { Home } from './Home.jsx'
import { About } from '../about/about.jsx'
import { PageError } from '../commun/PageError.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'rental/:id',
        element: <Single />,
      }
    ],
  }])


function App() {
  return <RouterProvider router={router} />
}

export default App

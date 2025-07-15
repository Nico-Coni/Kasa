// import { useState } from 'react'
import '../../styles/App.css'
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom'
import { Single } from '../rental/Rental.jsx'
import { Layout } from '../commun/Layout.jsx'
import { Home } from './Home.jsx'
import { About } from '../about/about.jsx'

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

function PageError() {
  const error = useRouteError()
  console.error(error)
  return <div>
    <h1>Page not found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
}

function App() {
  return <RouterProvider router={router} />
}

export default App

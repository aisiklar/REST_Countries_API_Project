import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home/Home'
import ErrorPage from './routes/error-page/ErrorPage'
import Root from './routes/root/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
)

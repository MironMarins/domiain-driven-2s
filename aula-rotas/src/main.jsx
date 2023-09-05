import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import Error from './routes/Error/index.jsx'
import EditarProdutos from './routes/EditarProdutos/index.jsx'



import App from './App.jsx'
import './index.css'


const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  errorElement: <Error/>,
  children:[
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/Produtos",
      element: <Produtos/>
    },
    {
      path:"/produtos/editar/:id",
      element: <EditarProdutos/>
    },
    {
      path: "/antiga",
      element: <Navigate to="/"/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
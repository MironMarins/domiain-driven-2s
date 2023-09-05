import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index'
import Produtos from './routes/Produtos/index'
import Error from './routes/Error/index'
import EditarProdutos from './routes/EditarProdutos/index'
/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
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
    }
  ]
}
])

ReactDOM.creaRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
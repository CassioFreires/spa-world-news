import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './pages/Home/Home.jsx'
import {GlobalStyled} from './GlobalStyled.jsx';
import Search from './pages/Search/Search.jsx';
import NotFoundRouter from './pages/NotFoundRouter/NotFoundRouter.jsx';
import Authentication from './pages/Authentication/Authentication.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar/>,
    errorElement: <NotFoundRouter />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/search/:title',
        element: <Search />
      },
    ],
  },
  {
    path: '/auth',
    element: <Authentication />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

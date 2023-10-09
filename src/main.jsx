import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import { Header } from './components/Header';
import { Homepage } from './pages/HomePage';
import { PostsIndex } from './pages/PostsIndex';
import PostDetail from './pages/PostDetail';
import { NewPostForm } from './pages/NewPostForm';
import { Login } from './pages/Login';
import { LoggedOut } from './pages/LoggedOut';
import { ErrorPage } from './pages/ErrorPage';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/edit',
    element: <PostsIndex />
  },
  {
    path: '/post/new',
    element: <NewPostForm />,
  },
  {
    path: '/post/:id',
    element: <PostDetail />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/logout',
    element: <LoggedOut />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

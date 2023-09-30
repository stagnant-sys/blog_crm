import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from './components/Header';
import { PostsIndex } from './pages/PostsIndex';
import PostDetail from './pages/PostDetail';
import { NewPostForm } from './pages/NewPostForm';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsIndex />
  },
  {
    path: '/post/new',
    element: <NewPostForm />,
  },
  {
    path: '/post/:id',
    element: <PostDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)

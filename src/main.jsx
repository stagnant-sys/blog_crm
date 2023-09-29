import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PostsIndex } from './pages/PostsIndex';
import PostDetail from './pages/PostDetail';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsIndex />
  },
  {
    path: '/post/:id',
    element: <PostDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

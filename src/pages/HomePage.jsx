import { Link } from "react-router-dom"
import { PostsIndex } from "./PostsIndex"
import { Header } from "../components/Header"
import { AccessDenied } from "./AccessDenied"

export const Homepage = () => {
  if (localStorage.role !== 'admin') {
    return (
      <AccessDenied />
    )
  }

  return (
    <>
      <Header />
      <PostsIndex />
    </>
  )
}
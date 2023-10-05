import { Link } from "react-router-dom"
import { PostsIndex } from "./PostsIndex"
import { Header } from "../components/Header"

export const Homepage = () => {
  if (localStorage.role !== 'admin') {
    return (
      <div>
        Access denied, please <Link to='/login'>log in</Link> with an admin account.
      </div>
    )
  }

  return (
    <>
      <Header />
      <PostsIndex />
    </>
  )
}
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
      <main className="homepage">
        <h3>Welcome, {localStorage.username}</h3>
        <div className="homepage_actions">
          <Link to='/post/new'>Create content</Link>
          <Link to='/edit'>See/edit content</Link>
        </div>
      </main>
    </>
  )
}
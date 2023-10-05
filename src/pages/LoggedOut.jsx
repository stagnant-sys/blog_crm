import { Link } from "react-router-dom"

export const LoggedOut = () => {
  return (
    <>
      You've been successfully logged out.
      <Link to='/login'>Log in again</Link>
    </>
  )
}
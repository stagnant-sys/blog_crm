import { Link } from "react-router-dom"

export const AccessDenied = () => {
  return (
    <div className="access-denied_container">
      <div className="access-denied_logo">Scientized <span>admin dashboard</span></div>
      <div className="access-denied_alert">
        Access denied
      </div>
      <div>
        <Link to='/login'>Log in</Link> with an admin account to continue.
      </div>
    </div>
  )
}
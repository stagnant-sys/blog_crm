import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserContainer = () => {
  const navigateTo = useNavigate();

  const logout = async () => {
    if (window.confirm('Do you really want to log out ?')) {
      localStorage.clear();
      navigateTo('/');
    } else {
      return;
    }
  }

  if (!localStorage.logged_in) {
    return (
      <div className="header_user-container">
        <button className="button_primary"><Link to="/user/login">Log in</Link></button>
      </div>
    )
  }
  return (
    <div className="header_user-container">
      <div>connected as <strong>{localStorage.username}</strong></div>
      <button onClick={logout} className="button_secondary">Logout</button>
    </div>
  )
}

export const Header = () => {
  if (localStorage.role !== 'admin') {
    return null;
  }
  
  return (
    <header className="main-header">
      <div className="header_logo"><Link to='/'>Scientized</Link> <span>admin dashboard</span></div>
      <UserContainer />
    </header>
  )
}
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigateTo = useNavigate();

  const logout = () => {
    if (window.confirm('Do you really want to log out ?')) {
      localStorage.clear();
      navigateTo('/logout');
    } else {
      return;
    }
  }

  if (localStorage.role !== 'admin') {
    return null;
  }
  
  return (
    <div>
      <Link to='/'>Index</Link>
      <button onClick={logout}>Log out</button>
    </div>
  )
}
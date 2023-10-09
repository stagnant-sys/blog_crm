import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigateTo = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const form = document.getElementById('login_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    const req = await fetch(`https://blogapi-production-5dee.up.railway.app/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (req.status !== 200) {
      return;
    } else {
      const result = await req.json();
      localStorage.setItem('username', result.userInfo.username);
      localStorage.setItem('user_id', result.userInfo._id);
      localStorage.setItem('role', result.userInfo.role);
      localStorage.setItem('logged_in', true);
      navigateTo('/');
    }
  }

  return (
    <div className="login_page">
      <div className="login_container">
        <h2>Log in</h2>
        <form id='login_form' onSubmit={login}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type='text' id='username' name='username' />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input type='password' id='password' name='password'/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
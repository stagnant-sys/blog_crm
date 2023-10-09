import { useNavigate, Link } from "react-router-dom";
import { Header } from "../components/Header";

export const NewPostForm = () => {
  const navigateTo = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const form = document.getElementById('new-post_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    data.author = localStorage.user_id;
    await fetch(`https://blogapi-production-5dee.up.railway.app/posts/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    navigateTo(`/`);
  }

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
      <main>
        <form id='new-post_form' onSubmit={createPost}>
          <div className="input-group">
            <label htmlFor="title">Title: </label>
            <input id='title' name='title' />
          </div>
          <div className="input-group">
            <label htmlFor="text">Text: </label>
            <textarea id='text' name='text' />
          </div>
          <div>
            <label htmlFor="visibility">Visibility: </label>
            <select id='visibility' name='visibility'>
              <option value='hidden'>Hidden</option>
              <option value='public'>Public</option>
            </select>
          </div>
          <button type='submit' className="button_primary">Create post</button>
        </form>
      </main>
      
    </>
  )
}
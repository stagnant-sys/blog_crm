import { useNavigate } from "react-router-dom";

export const NewPostForm = () => {
  const navigateTo = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const form = document.getElementById('new-post_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    console.log(data);
    await fetch(`https://blogapi-production-5dee.up.railway.app/posts/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    navigateTo(`/`);
  }

  return (
    <div>
      <form id='new-post_form' onSubmit={createPost}>
        <div>
          <label htmlFor="title">Title: </label>
          <input id='title' name='title' />
        </div>
        <div>
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
        <button type='submit'>Create post</button>
      </form>
    </div>
  )
}
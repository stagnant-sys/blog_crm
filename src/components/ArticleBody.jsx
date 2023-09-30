import { useNavigate } from "react-router-dom";

const ArticleBody = ({ blogPost }) => {
  const navigateTo = useNavigate();
  
  const submitForm = async (e) => {
    e.preventDefault();
    const form = document.getElementById('edit_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    await fetch(`https://blogapi-production-5dee.up.railway.app/posts/${blogPost._id}/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    navigateTo(`/post/${blogPost._id}`);
  }

  return (
    <div className="article_body">
    <form id='edit_form' method="" onSubmit={submitForm}>
      <label htmlFor="title">Title: </label>
      <input id="title" name="title" defaultValue={blogPost.title} />
      <label htmlFor='text'>Text: </label>
      <textarea id='text' name='text' defaultValue={blogPost.text} />
      <button type='submit'>Submit edit</button>
    </form>
      
    </div>
  )
}

export default ArticleBody;
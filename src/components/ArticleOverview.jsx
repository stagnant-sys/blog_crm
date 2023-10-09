import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticleOverview = ({ blogPost }) => {
  const [visibility, setVisibility] = useState(blogPost.visibility);
  const [loading, setLoading] = useState('');

  const textPreview = blogPost.text.substring(0, 200).trim() + '...';

  const changeVisibility = async () => {
    setLoading('...');
    await fetch(`https://blogapi-production-5dee.up.railway.app/posts/${blogPost._id}/visibility`, { method: 'PUT' });
    visibility === 'public' ? setVisibility('hidden') : setVisibility('public');
    setLoading('');
  }

  const deleteArticle = async () => {
    if (window.confirm("Do you really want to delete this article?")) {
      await fetch(`https://blogapi-production-5dee.up.railway.app/posts/${blogPost._id}/delete`, { method: 'DELETE' });
      location.reload();
    } else {
     return; 
    }
  }

  return (
    <div className='post-overview'>
      <h2 className="post-overview_title">{blogPost.title}</h2>
      
      
      <div className="post-overview_metadata">published by <strong>{blogPost.author.username}</strong> on {blogPost.createdAt_formatted}
      {
        blogPost.updatedAt !== blogPost.createdAt ? <p className="post-overview_updated">Edited {blogPost.updatedAt_formatted}</p> : null
      }
      </div>
      <div className="post-overview_text">{textPreview}</div>
      <div className="post-overview_actions">
        <div className="post-visibility_container">
          <p>Visibility : 
            {
              visibility === 'public' ? <span style={{color: 'green',}}> public</span> : <span style={{color: 'red'}}> hidden</span>
            }
            <span>{loading}</span>
          </p>
          <button onClick={changeVisibility}>↻</button>
        </div>
        <div className="actions">
          <button className="action_edit"><Link to={`/post/${blogPost._id}`}>Edit article</Link></button>
          <button onClick={deleteArticle} className="action_delete">Delete article</button>
        </div>
      </div>
      
    </div>
  )
}

export default ArticleOverview;
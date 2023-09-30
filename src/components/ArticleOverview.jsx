import { useState, useEffect } from "react";

const ArticleOverview = ({ blogPost }) => {
  const [visibility, setVisibility] = useState(blogPost.visibility);
  const [loading, setLoading] = useState('');

  const textPreview = blogPost.text.substring(0, 200).trim() + '...';

  const changeVisibility = async () => {
    setLoading(' ...');
    await fetch(`https://blogapi-production-5dee.up.railway.app/posts/${blogPost._id}/visibility`, { method: 'PUT' });
    visibility === 'public' ? setVisibility('hidden') : setVisibility('public');
    setLoading('');
  }

  return (
    <div className='blogpost_overview'>
      <h2>{blogPost.title}</h2>
      <div className="post-visibility_container">
        <p>Visibility : 
          {
            visibility === 'public' ? <span style={{color: 'green',}}> public</span> : <span style={{color: 'red'}}> hidden</span>
          }
          <span>{loading}</span>
        </p>
        <button onClick={changeVisibility}>↻</button>
      </div>
      
      <div className="blogpost_metadata">published by <strong>{blogPost.author.username}</strong> on {blogPost.createdAt_formatted}
      {
        blogPost.updatedAt !== blogPost.createdAt ? <p className="blogpost_edit-info">Edited {blogPost.updatedAt_formatted}</p> : null
      }
      </div>
      <div>{textPreview}</div>
      <a href={`/post/${blogPost._id}`}>Read full article</a>
    </div>
  )
}

export default ArticleOverview;
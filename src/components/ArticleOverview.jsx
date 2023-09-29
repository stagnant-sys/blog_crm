const ArticleOverview = ({ blogPost }) => {
  const textPreview = blogPost.text.substring(0, 200).trim() + '...';

  const changeVisibility = async () => {
    
  }

  return (
    <div className='blogpost_overview'>
      <h2>{blogPost.title}</h2>
      <div className="post-visibility_container">
        <p>Visibility : 
          {
            blogPost.visibility === 'public' ? <span style={{color: 'green',}}> public</span> : <span style={{color: 'red'}}> hidden</span>
          }
        </p>
        <button onClick={() => console.log(blogPost._id)}>↻</button>
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
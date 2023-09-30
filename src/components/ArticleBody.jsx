const ArticleBody = ({ blogPost }) => {
  return (
    <div className="article_body">
    <form>
      <label htmlFor="title">Title: </label>
      <input id="title" name="title" defaultValue={blogPost.title} />
      <label htmlFor='text'>Text: </label>
      <textarea id='text' name='text' defaultValue={blogPost.text} />
    </form>
      
    </div>
  )
}

export default ArticleBody;
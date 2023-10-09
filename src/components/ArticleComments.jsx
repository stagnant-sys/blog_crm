import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import deleteIcon from '../assets/delete.png'

const IndividualComment = ({ comment }) => {
  const navigateTo = useNavigate();
  const { id } = useParams();


  const deleteComment = async () => {
    if (window.confirm("Do you really want to delete this comment?")) {
      await fetch(`https://blogapi-production-5dee.up.railway.app/comments/${comment._id}/delete`, 
      { method: 'DELETE' });
      location.reload();
    } else {
      return;
    }
  }

  return (
    <div className="individual-comment_container">
      <div className="individual-comment_metadata">
        <span className="comment_author">{comment.author.username}</span> 
        <span className="comment_date">{comment.createdAt_formatted}</span>
        <button onClick={deleteComment} className="button_delete"><img src={deleteIcon} alt='' title='Delete comment' /></button>
      </div>
      <div className="individual-comment_text">{comment.text}</div>
    </div>
  )
}

const ArticleComments = ({ comments }) => {
  if (!comments.length) {
    return (
      <div>
        No comments(yet)...
      </div>
    )
  } else {
    return (
      <div className="comments_container">
        <h3>Edit comments:</h3>
        {
          comments.map((el) => {
            return (
              <IndividualComment key={el._id} comment={el} />
            )
          })
        }
      </div>
    )
  }
}

export default ArticleComments;
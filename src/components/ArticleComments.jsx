import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
      <p>{comment.author.username}</p>
      <p>{comment.text}</p>
      <p>{comment.createdAt_formatted}</p>
      <button onClick={deleteComment}>Delete comment</button>
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
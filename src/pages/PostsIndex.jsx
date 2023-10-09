import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleOverview from "../components/ArticleOverview";
import { Header } from "../components/Header";

export const PostsIndex = () => {
  const [allPosts, setAllPosts] = useState();

  const fetchPosts = async () => {
    const res = await fetch('https://blogapi-production-5dee.up.railway.app/posts/all');
    const data = await res.json();
    setAllPosts(data);
  }

  const postsList = () => {
    if (!allPosts) {
      return null;
    } else {
      return (
        <>
          {
            allPosts.map((el) => {
              return (
                <ArticleOverview key={el._id} blogPost={el} />
              )
            })
          }
        </>
      )
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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
        <h3>Articles list:</h3>
        {postsList()}
      </main>
    </>
  )

}
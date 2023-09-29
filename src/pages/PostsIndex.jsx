import { useState, useEffect } from "react";
import ArticleOverview from "../components/ArticleOverview";


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

  return (
    <>
      {postsList()}
    </>
  )

}
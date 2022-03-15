import { useEffect, useState, VFC } from "react";
import { getAllPosts } from "../api/post";
import { Post } from "../types/post";

export const Home: VFC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleGetAllPosts = async () => {
    try {
      const res = await getAllPosts();
      console.log(res.data);
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetAllPosts();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

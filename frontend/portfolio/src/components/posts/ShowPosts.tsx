import { useEffect, useState } from 'react';
import { GetPostsApi } from '../../services/UserService';
type Post = {
  id: number;
  title: string;
  body: string;
};
const ShowPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const getPosts = await GetPostsApi(); 
        setPosts(getPosts as Post[]);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const intervalId = setInterval(fetchPosts, 3000);

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowPosts;
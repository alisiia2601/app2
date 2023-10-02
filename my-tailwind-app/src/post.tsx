import React, { useState, useEffect } from 'react';
import { Post } from './types';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const PostComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showPosts, setShowPosts] = useState(false); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const toggleShowPosts = () => {
    setShowPosts(!showPosts);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">API App 2</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={toggleShowPosts}
      >
        {showPosts ? 'Hide Posts' : 'Show Posts'}
      </button>
      {showPosts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <h2 className="text-xl font-medium">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostComponent;

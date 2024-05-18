import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import axios from 'axios';

const Projects = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/post/get-post`);
        setBlogPosts(response.data); // Assuming response.data is an array of blog posts
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        
        {/* List of existing blog posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <div key={post._id} className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-500">{post.title}</div>
                <p className="text-gray-700 text-base">{post.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded-full border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;

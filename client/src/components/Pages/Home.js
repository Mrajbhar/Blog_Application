import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import 'tailwindcss/tailwind.css';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Layout>
      <div className={`home-container ${darkMode ? 'dark' : ''}`}>
        <section className="hero bg-blue-500 text-white py-20 dark:bg-gray-900">
          <div className="hero-content text-center">
            <h1 className="text-4xl font-bold mb-4 animate-bounce">Welcome to Our Blog!</h1>
            <p className="text-lg">Your go-to destination for all things technology!</p>
          </div>
        </section>

        <section className="section rounded bg-gray-100 py-8 animate__animated animate__fadeIn dark:bg-gray-800">
          <h2 className="text-2xl font-bold mb-4 animate__animated animate__bounce dark:text-white">Featured Posts</h2>
          {/* Featured posts component or list */}
        </section>

        <section className="section rounded bg-gray-200 py-8 animate__animated animate__fadeInUp dark:bg-gray-700">
          <h2 className="text-2xl font-bold mb-4 animate__animated animate__bounceInLeft dark:text-white">Latest News</h2>
          {/* Latest news component or list */}
        </section>

        <section className="section rounded bg-gray-300 py-8 animate__animated animate__fadeInDown dark:bg-gray-600">
          <h2 className="text-2xl font-bold mb-4 animate__animated animate__bounceInRight dark:text-white">Popular Topics</h2>
          {/* Popular topics component or list */}
        </section>

        <section className="section rounded bg-gray-400 py-8 animate__animated animate__fadeIn dark:bg-gray-500">
          <h2 className="text-2xl font-bold mb-4 animate__animated animate__flipInX dark:text-white">Subscribe to Our Newsletter</h2>
          {/* Newsletter subscription form */}
        </section>

        <button onClick={toggleDarkMode} className="fixed bottom-4 right-4 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </Layout>
  );
}

export default Home;

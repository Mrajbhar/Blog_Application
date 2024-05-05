import React from 'react';
import Layout from '../Layout/Layout';
import "../../styles/home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <section className="hero bg-blue-500 text-white py-20">
          <div className="hero-content">
            <h1 className="typewriter-text text-4xl font-bold mb-4">Welcome to Our Blog!</h1>
            <p className="text-lg">Your go-to destination for all things technology!</p>
          </div>
        </section>

        <section className="featured-posts py-8">
          <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
          {/* Featured posts component or list */}
        </section>

        <section className="latest-news py-8">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          {/* Latest news component or list */}
        </section>

        <section className="popular-topics py-8">
          <h2 className="text-2xl font-bold mb-4">Popular Topics</h2>
          {/* Popular topics component or list */}
        </section>

        <section className="newsletter py-8">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          {/* Newsletter subscription form */}
        </section>
      </div>
    </Layout>
  );
}

export default Home;

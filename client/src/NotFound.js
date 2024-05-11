import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg mb-8">The page you're looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">Go back to homepage</Link>
      </div>
    </Layout>
  );
};

export default NotFound;

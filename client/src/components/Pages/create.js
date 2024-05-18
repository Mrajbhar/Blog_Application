import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Layout from '../Layout/Layout';
import Typist from 'react-typist'; // Import Typist
import KeyboardEventHandler from 'react-keyboard-event-handler'; // Import KeyboardEventHandler
import axios from 'axios'; // Import axios
import '../../styles/Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple form validation
    if (!title || !editorState.getCurrentContent().hasText()) {
      setErrorMessage('Please fill out both title and content fields.');
      return;
    }

    // Convert content to raw text
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);

    try {
      // Send POST request to create post
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/post/create-post`, {
        title,
        content: JSON.stringify(rawContentState), // Send content as JSON string
      });
      
      // Clear form fields after successful submission
      setTitle('');
      setEditorState(EditorState.createEmpty());
      setSuccessMessage('Blog post created successfully!');
      setErrorMessage('');
      
      console.log('Blog post created:', response.data); // Log the created post data
    } catch (error) {
      console.error('Error creating blog post:', error);
      setErrorMessage('An error occurred while creating the blog post. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="create-container">
        <h1>
          {/* Use Typist for typing animation */}
          <Typist>
            Create Blog Post
          </Typist>
        </h1>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form className="create-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
            maxLength={100} // Limit title to 100 characters
            required
            className="title-input" // Add custom class for styling
          />
          <Editor
            editorState={editorState}
            wrapperClassName="editor-wrapper"
            editorClassName="editor-content"
            onEditorStateChange={onEditorStateChange}
            placeholder="Enter content"
            toolbar={{
              options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'remove', 'history'],
            }}
          />
          <KeyboardEventHandler // Add KeyboardEventHandler
            handleKeys={['a', 'b', 'c']} // Specify keys to trigger animation
            onKeyEvent={(key, e) => console.log(`${key} was pressed`)} // Add your animation logic here
          />
          <button type="submit" className="create-button">Create Post</button> {/* Add custom class for styling */}
        </form>
      </div>
    </Layout>
  );
};

export default Create;

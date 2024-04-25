"use client"
import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://aitest-qo53752v5a-nw.a.run.app/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        console.log("video sent");
        console.log(response.data.prediction);
        setResponseMessage(response.data.prediction);
      } else {
        throw new Error('Failed to upload video. Server returned ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred while uploading the video.');
    }
  };

  return (
    <div className='text-white'>
      <h2>Video Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {responseMessage && (
        <div>
          <h3>Response Message:</h3>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
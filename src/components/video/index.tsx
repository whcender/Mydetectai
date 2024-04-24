"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('video', selectedFile);

    try {
      const response = await fetch('https://aitest-qo53752v5a-nw.a.run.app', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setResponseMessage(data.message); // Assuming API returns a message
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred while uploading the video.');
    }
  };

  return (
    <div className='text-white'>
      <h2>Video Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
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
"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // Yükleniyor durumunu tutmak için

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile || loading) { // Eğer dosya seçilmemişse veya yükleme işlemi devam ediyorsa, işlemi durdur
      return;
    }

    setLoading(true); // Yükleme işlemi başladı

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
    } finally {
      setLoading(false); // İşlem tamamlandı, yükleme durumunu false olarak ayarla
    }
  };

  return (
    <div className='text-white w-[80%] m-auto'>
      <h2 className='mt-6'>Video Upload</h2>
      <form onSubmit={handleSubmit}>
        <input accept="video/*" type="file" onChange={handleFileChange} />
        <Button variant={'destructive'} type="submit" disabled={!selectedFile || loading}> {/* Buton yalnızca dosya seçilmişse ve yükleme işlemi yoksa aktif olacak */}
          {loading ? 'Uploading...' : 'Upload'}
        </Button>
      </form>
      {responseMessage && (
        <div>
          <h3>Sonuç:</h3>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;

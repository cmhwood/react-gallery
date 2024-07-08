import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    axios({
      method: 'GET',
      url: '/api/gallery',
    })
      .then((response) => {
        setGalleryPhotos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`error getting photos`, error);
      });
  };

  return (
    <div>
      <header>
        <h1>React Gallery</h1>
      </header>
      <GalleryList
        fetchPhotos={fetchPhotos}
        galleryPhotos={galleryPhotos}
        setGalleryPhotos={setGalleryPhotos}
      />
    </div>
  );
}

export default App;

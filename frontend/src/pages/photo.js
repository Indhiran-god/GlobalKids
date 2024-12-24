import React from 'react';

const PhotoGallery = () => {
  // Loading the images using require
  const photo1 = require('../assets/photo1.png');
  const photo2 = require('../assets/photo2.png');
  const photo3 = require('../assets/photo3.png');

  return (
    <div style={styles.gallery}>
      <div style={styles.photoItem}>
        <img src={photo1} alt="Description of photo 1" style={styles.image} />
        <p style={styles.description}>Description of photo 1</p>
      </div>
      <div style={styles.photoItem}>
        <img src={photo2} alt="Description of photo 2" style={styles.image} />
        <p style={styles.description}>Description of photo 2</p>
      </div>
      <div style={styles.photoItem}>
        <img src={photo3} alt="Description of photo 3" style={styles.image} />
        <p style={styles.description}>Description of photo 3</p>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  gallery: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
    gap: '20px',
    marginBottom: '50px', // Prevent footer overlap
  },
  photoItem: {
    textAlign: 'center',
    border: '3px solid #ccc',  // Frame around each photo
    borderRadius: '8px',       // Rounded corners
    padding: '10px',
    backgroundColor: '#f9f9f9', // Light background
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for depth
    width: '250px',
    marginBottom: '20px', // Spacing between items
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px', // Rounded corners for the image
  },
  description: {
    fontSize: '14px',
    color: '#333',
    marginTop: '10px',
  }
}

export default PhotoGallery;

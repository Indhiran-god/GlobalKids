import React, { useState } from 'react';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([
    { src: require('../assets/photo1.png'), description: 'Description of photo 1' },
    { src: require('../assets/photo2.png'), description: 'Description of photo 2' },
    { src: require('../assets/photo3.png'), description: 'Description of photo 3' },
  ]);
  const [showForm, setShowForm] = useState(false); // To toggle the add form visibility
  const [newPhoto, setNewPhoto] = useState(null); // For storing new photo file
  const [newDescription, setNewDescription] = useState(''); // For storing description

  const handleAddPhoto = (e) => {
    e.preventDefault();

    // Create new photo entry
    const newPhotoEntry = {
      src: URL.createObjectURL(newPhoto),
      description: newDescription,
    };

    setPhotos([...photos, newPhotoEntry]);
    setShowForm(false); // Close the form after submission
    setNewPhoto(null);
    setNewDescription('');
  };

  return (
    <div style={styles.gallery}>
      {/* Photo Items */}
      {photos.map((photo, index) => (
        <div key={index} style={styles.photoItem}>
          <img src={photo.src} alt={`Photo ${index + 1}`} style={styles.image} />
          <p style={styles.description}>{photo.description}</p>
        </div>
      ))}

      {/* Add Button */}
      <button onClick={() => setShowForm(true)} style={styles.addButton}>➕ Add Photo</button>

      {/* Add Photo Form */}
      {showForm && (
        <form onSubmit={handleAddPhoto} style={styles.form}>
          <h3 style={{ marginBottom: '10px', color: '#4CAF50' }}>Add New Photo</h3>
          
          <label style={styles.label}>Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewPhoto(e.target.files[0])}
            style={styles.input}
            required
          />
          
          <label style={styles.label}>Description:</label>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            style={styles.input}
            placeholder="Enter description here"
            required
          ></textarea>

          <div style={styles.formActions}>
            <button type="submit" style={styles.submitButton}>Submit</button>
            <button type="button" onClick={() => setShowForm(false)} style={styles.cancelButton}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  gallery: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
    gap: '20px',
    marginBottom: '50px',
  },
  photoItem: {
    textAlign: 'center',
    border: '3px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '250px',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  description: {
    fontSize: '14px',
    color: '#333',
    marginTop: '10px',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  },
  form: {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    display: 'block',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  formActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default PhotoGallery;

import React, { useState } from 'react';

const Birthday = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [birthdayList, setBirthdayList] = useState([]); // State to store birthday details

  const handleAddBirthday = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBirthday = {
      name: formData.get('name'),
      age: formData.get('age'),
      dob: formData.get('dob'),
      class: formData.get('class'),
    };
    setBirthdayList((prev) => [...prev, newBirthday]);
    setShowForm(false); // Close the form after adding the details
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <h1 style={{ color: '#4CAF50', textAlign: 'center' }}>🎉 Birthdays</h1>

      {/* Display Birthday List */}
      <div style={{ marginTop: '20px' }}>
        {birthdayList.length > 0 ? (
          birthdayList.map((item, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Age:</strong> {item.age}
              </p>
              <p>
                <strong>Date of Birth:</strong> {item.dob}
              </p>
              <p>
                <strong>Class:</strong> {item.class}
              </p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>No birthdays added yet.</p>
        )}
      </div>

      {/* Add Birthday Form */}
      {showForm && (
        <form
          onSubmit={handleAddBirthday}
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '20px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          }}
        >
          <h3 style={{ marginBottom: '10px', color: '#4CAF50' }}>Add Birthday</h3>
          <label>
            Name:{' '}
            <input
              type="text"
              name="name"
              required
              style={{
                marginBottom: '10px',
                display: 'block',
                width: '100%',
              }}
            />
          </label>
          <label>
            Age:{' '}
            <input
              type="number"
              name="age"
              required
              style={{
                marginBottom: '10px',
                display: 'block',
                width: '100%',
              }}
            />
          </label>
          <label>
            Date of Birth:{' '}
            <input
              type="date"
              name="dob"
              required
              style={{
                marginBottom: '10px',
                display: 'block',
                width: '100%',
              }}
            />
          </label>
          <label>
            Class:{' '}
            <input
              type="text"
              name="class"
              required
              style={{
                marginBottom: '10px',
                display: 'block',
                width: '100%',
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{
              backgroundColor: '#f44336',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '10px',
            }}
          >
            Cancel
          </button>
        </form>
      )}

      {/* Floating Add Button */}
      <button
        onClick={() => setShowForm(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          padding: '15px',
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
      >
        ➕
      </button>
    </div>
  );
};

export default Birthday;

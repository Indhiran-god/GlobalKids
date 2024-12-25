import React, { useState } from 'react';

const Notice = () => {
  const [notices, setNotices] = useState([
    {
      date: '2024-12-24',
      type: 'Holiday',
      title: 'Christmas Holiday 🎄',
      description: 'The school will be closed on 25th December for Christmas. Don’t forget to hang your stockings and enjoy the celebrations!',
    },
    {
      date: '2024-12-30',
      type: 'Event',
      title: 'New Year Party 🎉',
      description: 'Let’s welcome the New Year with fun and games! Join us on 31st December for a special party at school.',
    },
    {
      date: '2024-12-15',
      type: 'Reminder',
      title: 'Fee Payment Reminder 💰',
      description: 'Dear parents, please pay the quarterly fees by 20th December to ensure your child’s continued participation in all activities.',
    },
    {
      date: '2024-11-10',
      type: 'Holiday',
      title: 'Diwali Break 🪔',
      description: 'The school will remain closed from 11th to 13th November for Diwali. Wishing everyone a bright and colorful Diwali!',
    },
    {
      date: '2024-12-20',
      type: 'Event',
      title: 'Annual Sports Day 🏅',
      description: 'Our little champs will showcase their skills at the Annual Sports Day on 22nd December. Don’t miss the fun!',
    },
    {
      date: '2024-12-22',
      type: 'Event',
      title: 'Color Day 🌈',
      description: 'Wear your favorite color to school on 23rd December for our Color Day celebration!',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newNotice, setNewNotice] = useState({
    date: '',
    type: '',
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNotice((prevNotice) => ({
      ...prevNotice,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotices([...notices, newNotice]);
    setShowForm(false); // Hide the form after submission
    setNewNotice({ date: '', type: '', title: '', description: '' }); // Reset the form fields
  };

  return (
    <div style={{ fontFamily: 'Comic Sans MS, sans-serif', padding: '20px', backgroundColor: '#fff3e0' }}>
      <h1 style={{ color: '#FF5733', textAlign: 'center' }}>📢 Notices</h1>

      {/* Add Notice Button */}
      <button onClick={() => setShowForm(true)} style={styles.addButton}>➕ Add Notice</button>

      {/* Add Notice Form */}
      {showForm && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <h3 style={{ marginBottom: '10px', color: '#4CAF50' }}>Add New Notice</h3>

          <label style={styles.label}>Date:</label>
          <input
            type="date"
            name="date"
            value={newNotice.date}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Type:</label>
          <input
            type="text"
            name="type"
            value={newNotice.type}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter type (Holiday, Event, Reminder)"
            required
          />

          <label style={styles.label}>Title:</label>
          <input
            type="text"
            name="title"
            value={newNotice.title}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter notice title"
            required
          />

          <label style={styles.label}>Description:</label>
          <textarea
            name="description"
            value={newNotice.description}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter details of the notice"
            required
          ></textarea>

          <div style={styles.formActions}>
            <button type="submit" style={styles.submitButton}>Submit</button>
            <button type="button" onClick={() => setShowForm(false)} style={styles.cancelButton}>Cancel</button>
          </div>
        </form>
      )}

      <div style={{ marginTop: '20px' }}>
        {notices.map((notice, index) => (
          <div
            key={index}
            style={{
              border: '2px dashed #FFA726',
              borderRadius: '10px',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              fontSize: '16px',
            }}
          >
            <p><strong>📅 Date:</strong> {notice.date}</p>
            <p><strong>🔔 Type:</strong> {notice.type}</p>
            <p><strong>🎉 Title:</strong> {notice.title}</p>
            <p><strong>📝 Details:</strong> {notice.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  addButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
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

export default Notice;

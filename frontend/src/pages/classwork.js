import React, { useState } from 'react';

const Homework = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle visibility
  const [selectedDate, setSelectedDate] = useState('2024-12-24'); // Default selected date
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [homeworkList, setHomeworkList] = useState([
    {
      date: '2024-12-24',
      class: 'Grade 1',
      subject: 'Tamil',
      task: 'Write the Tamil alphabet (அ to ஔ) 3 times in your notebook.',
    },
    {
      date: '2024-12-24',
      class: 'Grade 1',
      subject: 'Drawing',
      task: 'Draw and color a Christmas tree with decorations.',
    },
    {
      date: '2024-12-24',
      class: 'Grade 1',
      subject: 'English',
      task: 'Write 5 sentences about your favorite holiday.',
    },
    {
      date: '2024-12-25',
      class: 'Grade 2',
      subject: 'Math',
      task: 'Solve the worksheet on addition and subtraction.',
    },
    {
      date: '2024-12-25',
      class: 'Grade 2',
      subject: 'Science',
      task: 'Read Chapter 3 and list 5 key points.',
    },
  ]);

  // Filter homework by selected date if not showing all
  const filteredHomework = showAll
    ? homeworkList
    : homeworkList.filter((item) => item.date === selectedDate);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const handleAddHomework = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newHomework = {
      date: formData.get('date'),
      class: formData.get('class'),
      subject: formData.get('subject'),
      task: formData.get('task'),
    };
    setHomeworkList((prev) => [...prev, newHomework]);
    setShowForm(false); // Close the form after adding homework
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        paddingBottom: '100px', // Extra padding to prevent overlap
        position: 'relative',
        minHeight: '100vh', // Ensure content covers full height
      }}
    >
      <h1 style={{ color: '#4CAF50', textAlign: 'center' }}>📚 Classwork</h1>
      <button
        onClick={handleToggle}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {showAll ? "Show Today's Classwork" : 'Show All Classwork'}
      </button>
      <div style={{ marginTop: '20px' }}>
        {filteredHomework.map((item, index) => (
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
              <strong>Date:</strong> {item.date}
            </p>
            <p>
              <strong>Class:</strong> {item.class}
            </p>
            <p>
              <strong>Subject:</strong> {item.subject}
            </p>
            <p>
              <strong>Classwork:</strong> {item.task}
            </p>
          </div>
        ))}
      </div>

      {/* Add Homework Form */}
      {showForm && (
        <form
          onSubmit={handleAddHomework}
          style={{
            position: 'fixed',
            bottom: '100px', // Adjusted for footer height
            right: '20px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          }}
        >
          <h3 style={{ marginBottom: '10px', color: '#4CAF50' }}>
            Add Classwork
          </h3>
          <label>
            Date:{' '}
            <input
              type="date"
              name="date"
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
          <label>
            Subject:{' '}
            <input
              type="text"
              name="subject"
              required
              style={{
                marginBottom: '10px',
                display: 'block',
                width: '100%',
              }}
            />
          </label>
          <label>
            Task:{' '}
            <textarea
              name="task"
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
          bottom: '80px', // Adjusted to be above footer
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

export default Homework;

import React, { useState } from 'react';

const Homework = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle visibility
  const [selectedDate, setSelectedDate] = useState('2024-12-24'); // Default selected date

  const homeworkList = [
    {
      date: '2024-12-24',
      class: 'Grade 1',
      subject: 'Tamil',
      task: 'Write the Tamil alphabet (அ to ஔ) 3 times in your notebook.'
    },
    {
      date: '2024-12-24',
      class: 'Grade 1',
      subject: 'Drawing',
      task: 'Draw and color a Christmas tree with decorations.'
    },
    {
      date: '2024-12-24',
      class: 'Grade 1',
      subject: 'English',
      task: 'Write 5 sentences about your favorite holiday.'
    },
    {
      date: '2024-12-25',
      class: 'Grade 2',
      subject: 'Math',
      task: 'Solve the worksheet on addition and subtraction.'
    },
    {
      date: '2024-12-25',
      class: 'Grade 2',
      subject: 'Science',
      task: 'Read Chapter 3 and list 5 key points.'
    }
  ];

  // Filter homework by selected date if not showing all
  const filteredHomework = showAll
    ? homeworkList
    : homeworkList.filter((item) => item.date === selectedDate);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: '#4CAF50', textAlign: 'center' }}>📚 Homework</h1>
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
          cursor: 'pointer'
        }}
      >
        {showAll ? 'Show Today\'s Homework' : 'Show All Homework'}
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
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Class:</strong> {item.class}</p>
            <p><strong>Subject:</strong> {item.subject}</p>
            <p><strong>Homework:</strong> {item.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homework;

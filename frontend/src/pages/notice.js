import React from 'react';

const Notice = () => {
  const notices = [
    {
      date: '2024-12-24',
      type: 'Holiday',
      title: 'Christmas Holiday 🎄',
      description: 'The school will be closed on 25th December for Christmas. Don’t forget to hang your stockings and enjoy the celebrations!'
    },
    {
      date: '2024-12-30',
      type: 'Event',
      title: 'New Year Party 🎉',
      description: 'Let’s welcome the New Year with fun and games! Join us on 31st December for a special party at school.'
    },
    {
      date: '2024-12-15',
      type: 'Reminder',
      title: 'Fee Payment Reminder 💰',
      description: 'Dear parents, please pay the quarterly fees by 20th December to ensure your child’s continued participation in all activities.'
    },
    {
      date: '2024-11-10',
      type: 'Holiday',
      title: 'Diwali Break 🪔',
      description: 'The school will remain closed from 11th to 13th November for Diwali. Wishing everyone a bright and colorful Diwali!'
    },
    {
      date: '2024-12-20',
      type: 'Event',
      title: 'Annual Sports Day 🏅',
      description: 'Our little champs will showcase their skills at the Annual Sports Day on 22nd December. Don’t miss the fun!'
    },
    {
      date: '2024-12-22',
      type: 'Event',
      title: 'Color Day 🌈',
      description: 'Wear your favorite color to school on 23rd December for our Color Day celebration!'
    },
  ];

  return (
    <div style={{ fontFamily: 'Comic Sans MS, sans-serif', padding: '20px', backgroundColor: '#fff3e0' }}>
      <h1 style={{ color: '#FF5733', textAlign: 'center' }}>📢 Notices</h1>
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
              fontSize: '16px'
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

export default Notice;

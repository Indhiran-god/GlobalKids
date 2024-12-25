import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const Fees = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle the add form visibility
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'RAM',
      class: 'UKG',
      totalFee: 50000,
      paidAmount: 30000,
      payments: [
        { date: '2024-01-01', time: '10:00 AM', amount: 10000 },
        { date: '2024-02-01', time: '02:30 PM', amount: 5000 },
        { date: '2024-03-01', time: '04:15 PM', amount: 15000 },
      ],
    },
    {
      id: 2,
      name: 'TAMIL',
      class: 'LKG',
      totalFee: 60000,
      paidAmount: 40000,
      payments: [
        { date: '2024-01-05', time: '11:00 AM', amount: 20000 },
        { date: '2024-02-15', time: '01:30 PM', amount: 20000 },
      ],
    },
  ]); // List of students
  const [selectedStudentId, setSelectedStudentId] = useState(students[0].id); // Selected student ID

  const selectedStudent = students.find((student) => student.id === selectedStudentId);

  const pendingAmount = selectedStudent.totalFee - selectedStudent.paidAmount;
  const paymentPercentage = (selectedStudent.paidAmount / selectedStudent.totalFee) * 100;

  const chartData = {
    labels: ['Paid Fees', 'Pending Fees'],
    datasets: [
      {
        data: [selectedStudent.paidAmount, pendingAmount],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
        borderWidth: 1,
      },
    ],
  };

  const handleAddFeeDetails = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTotalFee = parseInt(formData.get('totalFee'), 10);
    const percentagePaid = parseFloat(formData.get('percentagePaid'));
    const calculatedPaidAmount = (percentagePaid / 100) * newTotalFee;

    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === selectedStudentId
          ? { ...student, totalFee: newTotalFee, paidAmount: calculatedPaidAmount }
          : student
      )
    );
    setShowForm(false); // Close the form
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>School Fees Management</h2>

      {/* Select Student */}
      <div style={styles.selector}>
        <label>
          Select Student:
          <select
            style={styles.select}
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(parseInt(e.target.value, 10))}
          >
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name} ({student.class})
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Doughnut Chart */}
      <div style={styles.chartContainer} className="chart-container">
        <Doughnut data={chartData} options={chartOptions} />
        <div style={styles.percentageText}>
          <h3 style={styles.percentage}>{paymentPercentage.toFixed(2)}% Paid</h3>
          <p style={styles.details}>
            Paid: ₹{selectedStudent.paidAmount.toLocaleString()} / Total: ₹{selectedStudent.totalFee.toLocaleString()}
          </p>
          <p style={styles.details}>Pending: ₹{pendingAmount.toLocaleString()}</p>
        </div>
      </div>

      {/* Payments Section */}
      <div style={styles.notificationsContainer}>
        <h3 style={styles.paymentsTitle}>Payments Made</h3>
        <div style={styles.notificationList}>
          {selectedStudent.payments.map((payment, index) => (
            <div key={index} style={styles.notificationItem}>
              <span style={styles.paymentDate}>{payment.date} </span>
              <span style={styles.paymentTime}>at {payment.time}</span>:
              <span style={styles.paymentAmount}> ₹{payment.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add Fee Details Button */}
      <button onClick={() => setShowForm(true)} style={styles.addButton}>
        ➕ Add Fee Details
      </button>

      {/* Add Fee Details Form */}
      {showForm && (
        <form onSubmit={handleAddFeeDetails} style={styles.addForm}>
          <h3 style={{ marginBottom: '10px', color: '#4CAF50' }}>Add Fee Details</h3>
          <label>
            Total Fees:{' '}
            <input
              type="number"
              name="totalFee"
              required
              style={styles.input}
              defaultValue={selectedStudent.totalFee}
            />
          </label>
          <label>
            % Paid:{' '}
            <input
              type="number"
              name="percentagePaid"
              required
              style={styles.input}
              defaultValue={((selectedStudent.paidAmount / selectedStudent.totalFee) * 100).toFixed(2)}
            />
          </label>
          <h4 style={{ marginTop: '10px' }}>Payments Made:</h4>
          <div style={styles.paymentList}>
            {selectedStudent.payments.map((payment, index) => (
              <div key={index} style={styles.paymentItem}>
                {payment.date} at {payment.time}: ₹{payment.amount.toLocaleString()}
              </div>
            ))}
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
          <button type="button" onClick={() => setShowForm(false)} style={styles.cancelButton}>
            Cancel
          </button>
        </form>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <p>All Rights Reserved &copy; 2024</p>
      </footer>
    </div>
  );
};

// Chart.js options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1,
  plugins: {
    legend: { position: 'top' },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `₹${tooltipItem.raw.toLocaleString()}`,
      },
    },
  },
};

// Styles
const styles = {
  container: { fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px', marginBottom: '100px', backgroundColor: '#f4f4f9' },
  title: { fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '20px' },
  selector: { marginBottom: '20px' },
  select: { padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginLeft: '10px' },
  chartContainer: { margin: '20px auto', width: '100%', maxWidth: '400px' },
  percentageText: { marginTop: '20px', fontSize: '18px', color: '#333' },
  percentage: { fontSize: '24px', fontWeight: 'bold', color: '#36A2EB' },
  notificationsContainer: { marginTop: '30px', textAlign: 'center' },
  notificationList: { margin: '20px auto', maxWidth: '600px', textAlign: 'left', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
  notificationItem: { padding: '10px', borderBottom: '1px solid #ddd' },
  paymentDate: { fontWeight: 'bold' },
  paymentTime: { fontStyle: 'italic', color: '#888' },
  paymentAmount: { color: '#36A2EB' },
  addButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px 20px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  addForm: {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    maxWidth: '400px',
    textAlign: 'left',
  },
  input: { display: 'block', marginBottom: '10px', width: '100%' },
  submitButton: { backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginRight: '10px' },
  cancelButton: { backgroundColor: '#f44336', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' },
  paymentList: { marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px', border: '1px solid #ddd' },
  paymentItem: { marginBottom: '5px', fontSize: '14px' },
  footer: { marginTop: '40px', fontSize: '14px', color: '#888' },
};

export default Fees;

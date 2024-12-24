import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const Fees = () => {
  // Example data in Rupees
  const totalFee = 50000;  // Total fee in rupees
  const paidAmount = 30000;  // Paid amount in rupees
  const pendingAmount = totalFee - paidAmount;

  // Calculate percentage of payments made
  const paymentPercentage = (paidAmount / totalFee) * 100;

  // Data for the Doughnut chart
  const chartData = {
    labels: ['Paid Fees', 'Pending Fees'],
    datasets: [
      {
        data: [paidAmount, pendingAmount],
        backgroundColor: ['#36A2EB', '#FF6384'],  // Blue for paid, Red for pending
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
        borderWidth: 1,
      },
    ],
  };

  // Example payments made (with date and amount)
  const payments = [
    { date: '2024-01-01', amount: 10000 },
    { date: '2024-02-01', amount: 5000 },
    { date: '2024-03-01', amount: 5000 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Fee Status</h2>
      <div style={styles.chartContainer}>
        <Doughnut data={chartData} options={chartOptions} />
        <div style={styles.percentageText}>
          <h3 style={styles.percentage}>{paymentPercentage.toFixed(2)}% Paid</h3>
          <p style={styles.details}>Paid: ₹{paidAmount.toLocaleString()} / Total: ₹{totalFee.toLocaleString()}</p>
          <p style={styles.details}>Pending: ₹{pendingAmount.toLocaleString()}</p>
        </div>
      </div>
      <div style={styles.notificationsContainer}>
        <h3 style={styles.paymentsTitle}>Payments Made</h3>
        <div style={styles.notificationList}>
          {payments.map((payment, index) => (
            <div key={index} style={styles.notificationItem}>
              <span style={styles.paymentDate}>{payment.date}</span>: 
              <span style={styles.paymentAmount}> ₹{payment.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
      <footer style={styles.footer}>
        <p>All Rights Reserved &copy; 2024</p>
      </footer>
    </div>
  );
};

// Chart.js options
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          const value = tooltipItem.raw;
          return `₹${value.toLocaleString()}`;
        },
      },
    },
  },
};

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif', // Using a clean font for the whole page
    textAlign: 'center',
    padding: '40px',
    marginBottom: '100px',  // Add margin to prevent footer overlap
    backgroundColor: '#f4f4f9', // Light background color for the container
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  chartContainer: {
    position: 'relative',
    display: 'inline-block',
    width: '350px',  // Increased size for the chart
    height: '350px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: '#fff',  // White background for the chart container
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Shadow for the chart container
  },
  percentageText: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#333',
  },
  percentage: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#36A2EB',  // Blue color for the percentage
  },
  details: {
    fontSize: '16px',
    color: '#666',
    margin: '5px 0',
  },
  notificationsContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  paymentsTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
  },
  notificationList: {
    backgroundColor: '#fff', // White background for the notification container
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow around the notifications
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left',
  },
  notificationItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  paymentDate: {
    fontWeight: 'bold',
  },
  paymentAmount: {
    color: '#36A2EB', // Blue for the payment amount
  },
  footer: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
    fontSize: '14px',
  },
};

export default Fees;

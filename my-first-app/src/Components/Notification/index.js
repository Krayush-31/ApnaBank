import React, { useState } from 'react';
import './Notification.css';

const Notification = () => {
  const [news, setNews] = useState([
    "Bank of America Announces Interest Rate Hike to Combat Inflation",
    "New Digital Banking Features Launched: Secure Transactions Made Easier",
    "Financial Institutions Set to Implement New AI-Based Fraud Detection Systems",
    "Top 5 Tips to Maximize Your Savings Account Interest in 2024",
    "Cryptocurrency Regulations Coming Soon: What It Means for Your Bank Account",
    "Customer-First Approach: Bank Launches 24/7 Customer Support Chatbot",
    "Banking Apps See Record Usage as Digital Transactions Surge",
    "New Tax Laws May Impact Your Savings and Investments: Here's What You Need to Know",
    "Banking on the Go: New Contactless Payment Solutions Coming to All ATMs",
    "Sustainability Efforts: Bank to Fund Green Energy Projects with $5 Billion Investment",
    "Bank uplifted by the stock regaining its value"
  ]);

  return (
    <div className="notification-container">
      <div className="news-wrapper">
        {news.map((item, index) => (
          <div className="news-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="contact-container">
      <h2>Send Notification</h2>
      <form className="contact-form">
        <input type="email" placeholder="Enter email" className="form-input" />
        <textarea placeholder=" Message here" className="form-textarea"></textarea>
        <button type="submit" className="form-button">Send</button>
      </form>
    </div>
  );
}

export default App;







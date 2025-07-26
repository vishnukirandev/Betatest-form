import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); 
    setMessage('Form submitted!');
  }

  function handleCancel() {
    setMessage('Form cancelled.');
  }

  return (
    <div className="background">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Beta Test Feedback </h2>
          <input type="text" placeholder="Your Name" />
          <div className="button-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
        {message && <div className="message-box">{message}</div>}
      </div>
    </div>
  );
}

export default App;

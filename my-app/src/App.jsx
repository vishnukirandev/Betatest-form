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
          <h1>Beta Test Feedback Form </h1>
          <p>Your name</p>
          <input type="text" placeholder="John joestar" />
           <p>Your email</p>
          <input type="text" placeholder="johnjoestar@gmail.com" />
          <p>Rate your experience:</p>
          <div className="exps">
          <input type="radio" name="exp" value="1"/>1
          <input type="radio" name="exp" value="2"/>2
          <input type="radio" name="exp" value="3"/>3
          <input type="radio" name="exp" value="4"/>4
          <input type="radio" name="exp" value="5"/>5
          </div>   
          <p>How strongly would you recommend this to a friend?</p>
          <div className="exps">
          <input type="radio" name="exp" value="1"/>1
          <input type="radio" name="exp" value="2"/>2
          <input type="radio" name="exp" value="3"/>3
          <input type="radio" name="exp" value="4"/>4
          <input type="radio" name="exp" value="5"/>5
          </div> 
          <p>What was your favourite part of the game?</p>
          <input type="text" placeholder='Gameplay/Story/Combat'/>
          <p>Elaborate any bugs encountered:</p>
          <input type="text"/>
          <p>What would you like to see in the next patch??</p>
          <input type="text"/> <br/>S
          <p><i>Thank you for participating in the beta test!</i></p>
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

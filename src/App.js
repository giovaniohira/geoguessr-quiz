import React, { useState } from 'react';
import './App.css';
import Choice from './components/choice';
import data from './data.json';
import { wait } from '@testing-library/user-event/dist/utils';

// Convert data object to an array
const dataArray = Object.entries(data).map(([country, url]) => ({
  country,
  url: url
}));

// Generate a unique set of 4 options
const options = [];
while (options.length < 4) {
  const randomIndex = Math.floor(Math.random() * dataArray.length);
  const selectedItem = dataArray[randomIndex];
  if (!options.includes(selectedItem)) {
    options.push(selectedItem);
  }
}

// Select a random answer from the options
const answer = options[Math.floor(Math.random() * options.length)];

function App() {
  const [clickedCountry, setClickedCountry] = useState(null);

  const handleClick = (country) => {
    setClickedCountry(country);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="App">
      <h1>{answer.url}</h1>
      <div className='options'>
        {options.map((item, index) => (
          <Choice 
            key={index} 
            country={item.country} 
            answer={answer.country} 
            onClick={() => handleClick(item.country)} 
            isClicked={clickedCountry === item.country} 
            disabled={!!clickedCountry}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

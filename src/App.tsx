import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [clicks, setClicks] = useState<number>(0);

  function isPrime(num: number): boolean {
  // Handle invalid input (non-positive numbers)
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
  }

  useEffect(() => {
    if(clicks > 0) {
      if(isPrime(clicks)) {
        console.error(`The prime ${clicks} has been clicked!`)
      } else {
        console.log(`Clicked the number: ${clicks}!`)
      }
    }
  }, [clicks])

  return (
    <main className={"main"}>
      <div className={"container"}>
        <div className={"header"}>
          Heroku Logplex Demo
        </div>
        <div className={"description"}>
          This is an example app to showcase the awesomeness of Heroku Logplex.
        </div>
        <div className={"description"}>
          Hit the button to count and see the magic of logplex unfold! Take a look at primes in your logs.
        </div>
        <div className={"buttonContainer"}>
        <button className={"button"} onClick={() => setClicks((prev: number) => prev+1)}>
          <div className={"buttonText"}>
          Click Me!
          </div>
        </button>
        <div className={"description"}>
          The button has been clicked: {clicks} times.
        </div>
        </div>
      </div>
    </main>
  );
}

export default App;

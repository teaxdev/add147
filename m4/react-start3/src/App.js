import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function SecretComponent() {
  return <h1>big foot is not real D:</h1>;
}

function RegularComponent() {
  return <h1>big foot is real!!!!!!!!!</h1>;
}

const [, , , cat] = ["Luca", "Missy", "Shax", "Noodle", "Cypress"]
console.log(cat)

function App({authorized}) {
  const [gear, setGear] = useState("Cruising");
  // console.log(cruise)
  return (
  <>
    <h1>Super true info:</h1>
    {authorized ? <SecretComponent /> : <RegularComponent />}
    <h1>The 4th cat</h1>
    {cat}
    <h1>Car</h1>
    {gear}
    <button onClick={() => setGear("Cruising")}>Cruise</button>
    <button onClick={() => setGear("Accelerating")}>Accelerate</button>
    <button onClick={() => setGear("Braking")}>Brake</button>

  </>
  )
}

export default App;

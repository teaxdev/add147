import React from 'react';
import './App.css';

function Header(props) {
  return (
    <header className="banner">
      <h1>{props.pageTitle}</h1>
      <nav className="navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Main(props) {
  return (
    <main className="main-content">
      <h2>{props.mainTitle}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      
      <h3>{props.descriptionTitle}</h3>
      <p>{props.description}</p>
      
      <h3>{props.sectionTitle}</h3>
      <p>{props.sectionText}</p>
    </main>
  );
}

function Footer(props) {
  return (
    <footer className="footer">
      <p>&copy; {props.copyright}</p>
      <p>Date: {new Date().toDateString()}</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header pageTitle="Reacty"/>
      <Main 
        mainTitle="Welcome to Reacty!"
        descriptionTitle="About Reacty"
        description="Reacty uses props. There are three sections. A banner at the top, a main in the middle, and a footer at the bottom. Each component receives data through props, showcasing how React components are used."
        sectionTitle="Features"
        sectionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <Footer copyright="2025 Reacty. All rights reserved." />
    </div>
  );
}

export default App;

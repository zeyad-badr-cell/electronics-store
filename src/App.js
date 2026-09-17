import React from 'react';
import './App.css';
import Header from './components/nav/header';
import Home from './pages/home/home';
import Footer from './components/nav/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;

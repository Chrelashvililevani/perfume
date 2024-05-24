import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <HomePage />
      <Routes>
        <Route path="/" exact component={HomePage} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

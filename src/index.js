import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollBar from './components/ScrollBar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ScrollBar />
    <Hero />
    <Projects />
    <Technologies />
    <AboutMe />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

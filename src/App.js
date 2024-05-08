import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import ContactPage from './components/ContactPage';
import EduPackages from './components/packages';
import Signin from './components/signin';
import Signup from './components/signup';
import Footer from './components/footer';
import Page1 from './components/page1';
import Quiz from './components/quiz';
import Page3 from './components/page3';
import Results from './components/result';
import Vision from './components/vision';
import Review from './components/review';
import FAQ from './components/faq';
import Com from './components/com';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/packages" element={<EduPackages />} />
        </Routes>
      </div>
    </Router>
  );
}

// Define a Home component if needed
const Home = () => (
  <>
    <Page1 />
    <Page3 />
    <Quiz />
    <Results />
    <Vision />
    <Review />
    <FAQ />
    <Com />
  </>
);

export default App;

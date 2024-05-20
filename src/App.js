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
import Checkout from './components/Checkout'; 
import { Elements } from '@stripe/react-stripe-js'; // Import Elements
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('process.env.sk_test_51PHgJWSEdO7ajODjtoGJu3GGJo5OjjlZckYJ3XJRG5zPq6YvYisKyGTVGHNz5GV7Xl0XytRDpoPMdf8DIQ4j9cYo00fSpCfWI6')

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
          <Route path="/checkout" element={<Elements stripe={stripePromise}><Checkout /></Elements>} />
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
    <Footer />
  </>
);

export default App;

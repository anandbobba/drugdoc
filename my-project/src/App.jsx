import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/HomePAGE';
import DiseaseSearch from './pages/DiseaseSearchPage';
import DosageSafetyCheck from './pages/DosageSafetyCheckPage';
import VideoCall from './pages/VideoCallPage';
import Chatbot from './pages/ChatBotPage';

import ContactUs from './pages/ContactUsPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

const App = () => {
  const location = useLocation();

  // Define paths where Navbar and Footer should not be shown (e.g., SignUp, SignIn, DiseaseSearch, DosageSafetyCheck pages)
  const hideElementsPaths = ['/', '/signin', '/diseasesearch', '/dosagesafetycheck'];

  // Check if the current path is in the list of paths that should hide Navbar and Footer
  const showNavbarAndFooter = !hideElementsPaths.includes(location.pathname);

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      {/* Conditionally render Navbar */}
      {showNavbarAndFooter && <Navbar />}

      {/* Main content area */}
      <div className="flex-grow container mx-auto p-4">
        <Routes>
          {/* Route for SignUpPage as default route */}
          <Route path="/" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />

          {/* Other routes with Navbar */}
          <Route path="/home" element={<Home />} />
          <Route path="/diseasesearch" element={<DiseaseSearch />} />
          <Route path="/dosagesafetycheck" element={<DosageSafetyCheck />} />
       
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/chatbot" element={< Chatbot/>} />
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};

export default App;

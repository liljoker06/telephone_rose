import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ChatPage from './pages/ChatPage.jsx';
import ConsentBanner from './components/ConsentBanner.jsx';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

          {/* Route protégée */}
          <Route 
            path="/chat" 
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </BrowserRouter>

      <ConsentBanner/> {/* bannière RGPD toujours visible */}
    </>
  );
}

export default App;

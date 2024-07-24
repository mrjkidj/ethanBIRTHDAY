import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ProtectedPage from './Pages/ProtectedPage/ProtectedPage';
import Footer from './Components/Footer/Footer';

// Импортируем страницы
import TobiPage from './Pages/TobiPage/TobiPage';
import LeshaPage from './Pages/LeshaPage/LeshaPage';
import JannPage from './Pages/JannPage/JannPage';
import LuPage from './Pages/KardiPage/KardiPage';
import LiPage from './Pages/LiPage/LiPage';
import MalPage from './Pages/MalPage/MalPage';
import DayPage from './Pages/DayPage/DayPage';
import DinPage from './Pages/DinPage/DinPage';
import KertPage from './Pages/KertPage/KertPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/protected" element={<ProtectedPage code="1234"><ProtectedContent /></ProtectedPage>} />
      <Route path="/Tobi" element={<ProtectedPage code="7345"><TobiPage /></ProtectedPage>} />
      <Route path="/Lesha" element={<ProtectedPage code="5678"><LeshaPage /></ProtectedPage>} />
      <Route path="/Jann" element={<ProtectedPage code="9101"><JannPage /></ProtectedPage>} />
      <Route path="/Lu" element={<ProtectedPage code="1121"><LuPage /></ProtectedPage>} />
      <Route path="/Li" element={<ProtectedPage code="3141"><LiPage /></ProtectedPage>} />
      <Route path="/Mal" element={<ProtectedPage code="5161"><MalPage /></ProtectedPage>} />
      <Route path="/Day" element={<ProtectedPage code="7181"><DayPage /></ProtectedPage>} />
      <Route path="/Din" element={<ProtectedPage code="9202"><DinPage /></ProtectedPage>} />
      <Route path="/Kert" element={<ProtectedPage code="1222"><KertPage /></ProtectedPage>} />
    </Routes>
    <Footer />
  </Router>
);

const ProtectedContent = () => (
  <div>
    <h2>Protected Content</h2>
    <p>This content is protected by a code.</p>
  </div>
);

export default App;

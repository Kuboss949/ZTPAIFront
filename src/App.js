import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Reservation from './pages/Reservation';
import GalleryOverview from './pages/GalleryOverview';
import ClientGallery from './pages/ClientGallery';
import Account from './pages/Account';


import './global.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rezerwacja" element={<Reservation />} />
        <Route path="/moje-sesje" element={<GalleryOverview />} />
        <Route path="/galeria" element={<ClientGallery />} />
        <Route path="/konto" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

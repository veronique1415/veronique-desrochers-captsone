import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import FindUsPage from './pages/FindUsPage/FindUsPage';
import ListingPage from "./pages/ListingPage/ListingPage";
import ProducersPage from "./pages/ProducersPage/ProducersPage"
import ProducerDetailsPage from './pages/ProducerDetailsPage/ProducerDetailsPage';
import WinesPage from './pages/WinesPage/WinesPage';
import WineDetailsPage from './pages/WineDetailsPage/WineDetailsPage';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/FindUs' element={<FindUsPage />} />
        <Route path='/Listing' element={<ListingPage />} />
        <Route path='/Producers' element={<ProducersPage />} />
        <Route path='/Producers/:producerId' element={<ProducerDetailsPage />} />
        <Route path='/Wines' element={<WinesPage />} />
        <Route path='/Wines/:wineId' element={<WineDetailsPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

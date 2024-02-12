import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import FindUsPage from './pages/FindUsPage/FindUsPage';
import ListingPage from "./pages/ListingPage/ListingPage";
import ProducersPage from "./pages/ProducersPage/ProducersPage"
import ProducerDetailsPage from './pages/ProducerDetailsPage/ProducerDetailsPage';
import WinesPage from './pages/WinesPage/WinesPage';
import WineDetailsPage from './pages/WineDetailsPage/WineDetailsPage';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLayoutEffect } from 'react';
import { AdminLoginPage } from './pages/AdminLoginPage/AdminLoginPage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';





function App() {
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/findUs' element={<FindUsPage />} />
          <Route path='/listing' element={<ListingPage />} />
          <Route path='/producers' element={<ProducersPage />} />
          <Route path='/producers/:producerId' element={<ProducerDetailsPage />} />
          <Route path='/wines' element={<WinesPage />} />
          <Route path='/wines/:wineId' element={<WineDetailsPage />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/Login' element={<AdminLoginPage />}/>
       </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

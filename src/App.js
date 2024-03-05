import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Wta from "./pages/Wta";
import Atp from "./pages/Atp";
import Shop from './pages/Shop';
import Tournaments from './pages/Tournaments';
import Lessons from './pages/Lessons'
import {BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/home" element={<Homepage />} />
                  <Route path="/wta" element={<Wta />} />
                  <Route path="/atp" element={<Atp />} />
                  <Route path="/tournaments" element={<Tournaments />} />
                  <Route path="/lessons" element={<Lessons />} />
                  <Route path="/shop" element={<Shop />} />
                  {/* <Route path='*' element={<PageNotFound />} /> */}
              </Routes>
          </BrowserRouter>
          <Footer />
      </div>
  );
}

export default App;

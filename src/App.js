import './css/App.css';
import './css/mobile.css';
import './css/desktop.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import CoinListing from './Components/CoinListing';
import CoinDetails from './Components/CoinDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CoinListing />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

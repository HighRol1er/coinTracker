import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Common/Footer';
import Home from './pages/HomePage';
import WatchListPage from './pages/WatchListPage';
import Compare from './pages/Compare';
import CoinPage from './pages/CoinPage';
import DashboardPage from './pages/DashboardPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin:id" element={<CoinPage />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/watchlist" element={< WatchListPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

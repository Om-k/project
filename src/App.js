import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import './App.css';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;

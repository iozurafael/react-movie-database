import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './Pages/Home';
import FavoritesPage from './Pages/Favorites';
import MovieDetailView from './Pages/MovieDetailView';
import Toast from './components/Alerts/Toast';

function App() {
  return (
    <Router>
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailView />} />
      </Routes>
    </Router>
  );
}
export default App;

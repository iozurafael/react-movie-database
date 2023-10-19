import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './Pages/Home';
import FavoritesPage from './Pages/Favorites';
import MovieDetailView from './Pages/MovieDetailView';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailView />} />
      </Routes>
    </Router>
  );
}
export default App;

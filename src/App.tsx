import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DemonologyPage from './pages/DemonologyPage';
import StoriesPage from './pages/StoriesPage';
import RealLifePage from './pages/RealLifePage';
import FeedbackPage from './pages/FeedbackPage';
import AuthPage from './pages/AuthPage';
import ShareStoryPage from './pages/ShareStoryPage';
import DemonDetailPage from './pages/DemonDetailPage';
import StoryDetailPage from './pages/StoryDetailPage';
import IncidentDetailPage from './pages/IncidentDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/demonology" element={<DemonologyPage />} />
          <Route path="/demonology/:category" element={<DemonologyPage />} />
          <Route path="/demon/:id" element={<DemonDetailPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/story/:id" element={<StoryDetailPage />} />
          <Route path="/share-story" element={<ShareStoryPage />} />
          <Route path="/real-life" element={<RealLifePage />} />
          <Route path="/incident/:id" element={<IncidentDetailPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
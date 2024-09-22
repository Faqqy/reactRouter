import '../src/index.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="page">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/drift" element={<DriftPage/>} />
          <Route path="/timeattack" element={<TimeAttackPage/>} />
          <Route path="/forza" element={<ForzaPage/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

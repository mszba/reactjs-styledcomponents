import { BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/index';

import './App.css';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;

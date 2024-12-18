
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Courses from './pages/Courses';
import FAQ from './pages/FAQ';
import About from './pages/About';

import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/courses" element={<Courses />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
           
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
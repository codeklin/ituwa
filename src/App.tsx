
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';
import About from './pages/About';
import Courses from './pages/Courses';
import FAQ from './pages/FAQ';
import Home from './pages/Home';


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
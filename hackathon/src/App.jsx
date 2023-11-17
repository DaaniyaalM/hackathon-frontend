import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoadMap from './components/RoadMap/RoadMap';
import FormField from './components/FormField/FormField';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<FormField />} />
            <Route path="/Roadmap" element={<RoadMap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

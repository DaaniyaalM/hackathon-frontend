// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoadMap from './components/RoadMap/RoadMap';
import FormField from './components/FormField/FormField';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <FormField />
        <RoadMap /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;

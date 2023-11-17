// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoadMap from './components/RoadMap/RoadMap';
import FormField from './components/FormField/FormField';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main></main>
      <FormField />
      <RoadMap />

      <Footer />
    </div>
  );
}

export default App;
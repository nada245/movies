import './App.css';
import Add from './Component/Add';
import Watched from './Component/Watched';
import Watchlist from './Component/Watchlist';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContextProvider from './Component/Context/GolbalContext';
const App = () => {
  return (
    <Router>
    <ContextProvider>
    <Header />
      <Routes>
        <Route path='/' element={<Watchlist />} />
        <Route path='/watched' element={<Watched />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </ContextProvider>
    </Router>
  );
};

export default App;


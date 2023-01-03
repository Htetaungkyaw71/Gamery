import { Route, Routes } from 'react-router';
import Category from './components/Category';
import Detail from './components/Detail';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home itemsPerPage={24} />} />
        <Route path="/game/:id" element={<Detail />} />
        <Route path="/:categoryName" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;

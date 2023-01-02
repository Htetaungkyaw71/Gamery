import { Route, Routes } from 'react-router';
import Detail from './components/Detail';
import Home from './components/Home';


function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Home itemsPerPage={24} />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

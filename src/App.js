import Home from './Home';
import Navbar from './Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/create' element={<Create />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

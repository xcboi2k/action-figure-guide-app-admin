import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BA20132014 from './pages/PageBA20132014';
import BA20142015 from './pages/PageBA20142015';
import BA20152017 from './pages/PageBA20152017';
import EX20142015 from './pages/PageEX20142015';
import MU20152017 from './pages/PageMU20152017';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/addBA20132014' element={<BA20132014 />}/>
          <Route path='/addBA20142015' element={<BA20142015 />}/>
          <Route path='/addBA20152017' element={<BA20152017 />}/>
          <Route path='/addEX20142015' element={<EX20142015 />}/>
          <Route path='/addMU20152017' element={<MU20152017 />}/>

          <Route path='/updateBA20132014/:id' element={<BA20132014 />}/>
          <Route path='/updateBA20142015/:id' element={<BA20142015 />}/>
          <Route path='/updateBA20152017/:id' element={<BA20152017 />}/>
          <Route path='/updateEX20142015/:id' element={<EX20142015 />}/>
          <Route path='/updateMU20152017/:id' element={<MU20152017 />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

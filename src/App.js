import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Nav, News, About, Welcome } from './components'

function App() {
  return (
    <div className="App">
      <div style={{display:"flex", justifyContent:'center',paddingTop:'2em'}}>
      <Nav />
      </div>
      <header className="App-header">

        <Routes>

          <Route path='/' element={<Navigate to='/welcome' />} />

          <Route path='/welcome/*' element={<Welcome />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />


        </Routes>


      </header>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import Bkapp from './components/bkapp';
import Dashbd from './components/dashbd';
import Opentry from './components/opentry';
import Prescription from './components/prescription'
import Empreg from './components/empreg';
import Editprof from './components/editprof';

function App() {
  return (
    <>
    
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/bkapp" element={<Bkapp />}></Route>
        <Route path="/dashbd" element={<Dashbd />}></Route>
        <Route path="/opentry" element={<Opentry />}></Route>
        <Route path='/prescription' element={<Prescription />}></Route>
        <Route path='/empreg' element={<Empreg />}></Route>
        <Route path='/editprof' element={<Editprof />}></Route>
        <Route path='/empreg' element={<Empreg />}></Route>
        <Route path='/editprof' element={<Editprof />}></Route>
      </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
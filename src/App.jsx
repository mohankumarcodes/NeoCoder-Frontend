import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Onboarding  from './pages/Onboarding';
import Dashboard  from './pages/Dashboard';
import Instruction from './pages/Instruction';
import Test from './pages/Test';
import CodingTest from "./pages/CodingTest";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Onboarding" element={<Onboarding/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Instruction" element={<Instruction/>}/>
          <Route path="/Test" element={<Test/>}/>
          <Route path="/CodingTest" element={<CodingTest />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App ;

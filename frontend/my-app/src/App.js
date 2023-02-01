import React from 'react';
import ReactCalendar from './ReactCalendar';
import VerificationPage from './verificationPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<ReactCalendar />} />
          <Route exact path='/VerificationPage' element={<VerificationPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
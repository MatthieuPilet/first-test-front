import './App.css';
import React from 'react';
import UserComponent from './component/TestCallFunctionComponent';
import TestRoutePage from './pages/TestRoutePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*function App() {
  return (
    <div className="App">
      <UserComponent />
    </div>
  );
}*/

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserComponent />}>
          
          <Route path="testRoutePage" element={<TestRoutePage />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  }

export default App;

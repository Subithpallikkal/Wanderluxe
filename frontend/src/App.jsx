import React, { useState } from 'react';
import axios from 'axios';
import AppLayout from './Components/AppLayout';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';


const App = () => {
  
  return (
   <Router>
       <Routes> 
     <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home />} />
     </Route>
      </Routes>
   </Router>
   
  );
};

export default App;

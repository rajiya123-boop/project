import React from 'react';
import EditForm from './components/viewModel';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';
import DashBoard from './components/Table';
import NewField from './components/AddNewField';

import { Routes, Route } from 'react-router-dom';
import EditField from './components/viewModel';
import "./styles/AddNewFiels.css";
import "./styles/ViewModal.css";

const App = () => {
  return (
  
      <div>
        <Sidebar />
        <Topbar />

        <Routes>
          <Route path="/" element={<Sidebar/>} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/edit" element={<EditField />} />
          <Route path="/add" element={<NewField />} />
        </Routes>
      </div>
    
  );
};

export default App;

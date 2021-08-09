import React from 'react';
import AppBar from 'components/AppBar/AppBar';
import AppBoard from 'components/AppBoard/AppBoard';
import AppContent from 'components/AppContent/AppContent';
import './App.scss';
function App() {
  return (
    <div className='App'>
      <AppBar />
      <AppBoard />
      <AppContent />
    </div>
  );
}

export default App;

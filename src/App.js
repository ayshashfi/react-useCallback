//import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import React from 'react';

function App() {
  return (
    <div className="App">
     <ParentComponent/>
    </div>
  );
}

export default React.memo(App);

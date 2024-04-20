//import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import React from 'react';
import Counter from './components/useReducer';

function App() {
  return (
    <div className="App">
     <ParentComponent/>
     <Counter/>
    </div>
  );
}

export default React.memo(App);

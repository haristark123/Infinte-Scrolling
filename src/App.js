import logo from './logo.svg';
import './App.css';
// import List from './components/List';
import React from 'react';
const List = React.lazy(()=>import("./components/List"))

function App() {
  return (
    <div>
      <List />
    </div>
  );
}

export default App;

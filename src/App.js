import React from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar'
import './App.css';

const items = [
	{
		function: "functionName",
		prettyName: "Pretty Name",
		endpoint: "/endpoint"
  },
  {
		function: "functionName",
		prettyName: "Pretty Name2",
		endpoint: "/endpoint"
	}
]

function App() {
  return (
    <Sidebar items={items}/>
  );
}

export default App;

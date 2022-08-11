import React from 'react';
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import Header from './Header';
import './App.css';

function SearchPageTwo() {
  return (
    <div className="app">
      <Header/>
      <div className="app__page">
        <Sidebar/>
        <Recommended/>
      </div>
    </div>
  )
}

export default SearchPageTwo
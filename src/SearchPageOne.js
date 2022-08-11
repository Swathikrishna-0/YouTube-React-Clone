import React from 'react';
import SearchPage from './SearchPage';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

function SearchPageOne() {
  return (
    <div className="app">
       <Header/>
      <div className="app__page">
        <Sidebar/>
        <SearchPage/>
      </div>
    </div>
  )
}

export default SearchPageOne
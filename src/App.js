import './App.css';
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import SearchPageOne from './SearchPageOne';
import SearchPageTwo from './SearchPageTwo';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={< SearchPageTwo />}></Route>
          <Route exact path="/search/:searchTerm" element={< SearchPageOne />}></Route>
        </Routes> 
      </Router>
    </div>
  );
}
/* Youtube Header -> component one */
/* Sidebar -> component two */
/* Body -> component three */
export default App;
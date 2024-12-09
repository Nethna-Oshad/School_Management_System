
import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Header/>
      <AddStudent/>
    </div>
  );
} 

export default App;

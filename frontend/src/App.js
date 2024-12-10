import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllStudents from './components/AllStudents';
import UpdateStudent from './components/UpdateStudent';
function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
        <Route path="/add" element={<AddStudent/>} />
        <Route path="/update/:id" element={<UpdateStudent/>} />
         <Route path="/" element={<AllStudents/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

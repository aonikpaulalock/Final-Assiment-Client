import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import MyProfile from './Pages/MyProfile/MyProfile';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Notfond from './Pages/Notfound/Notfond';
import Signup from './Pages/Login/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          
        </Route>
        <Route path="*" element={<Notfond />}></Route>
      </Routes>
    </div>
  );
}

export default App;

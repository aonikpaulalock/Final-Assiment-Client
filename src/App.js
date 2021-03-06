import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import MyPortpolio from './Pages/MyPortpolio/MyPortpolio';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Notfond from './Pages/Notfound/Notfond';
import Signup from './Pages/Login/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './Pages/Order/Order';
import RequireAuth from './Pages/Login/RequireAuth';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUser from './Pages/Dashboard/AllUser';
import RequireAdmin from './Pages/Login/RequiredAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MangeOrders from './Pages/Dashboard/MangeOrders';
import Payment from './Pages/Dashboard/Payment';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/myPortpolio" element={<MyPortpolio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/order/:id" element={<RequireAuth><Order /></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrder />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="users" element={<RequireAdmin><AllUser /></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path="manage" element={<RequireAdmin><ManageProduct /></RequireAdmin>}></Route>
          <Route path="manageOrder" element={<RequireAdmin><MangeOrders /></RequireAdmin>}></Route>
        </Route>
        <Route path="*" element={<Notfond />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

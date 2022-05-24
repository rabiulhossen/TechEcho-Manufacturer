import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Blogs from "./components/others/Blogs";
import About from "./components/others/About";
import Notfound from "./components/others/Notfound";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import RequireAuth from "./components/Login/RequireAuth";
import AddOrder from "./components/Dashboard/AddOrder";
import MyOrders from "./components/Dashboard/MyOrders";
import Profile from "./components/Dashboard/Profile";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";

function App() {
  return (
    <div className="App bg-gradient-to-r from-sky-400 via-purple-400 to-sky-400">
      <Header />

      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}>
            {" "}
          </Route>
          <Route path="profile" element={<Profile />}>
            {" "}
          </Route>
        </Route>
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

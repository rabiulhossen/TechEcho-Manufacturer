import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Blogs from "./components/others/Blogs";
import About from "./components/others/About";
import Notfound from "./components/others/Notfound";

function App() {
  return (
    <div className="App   bg-gradient-to-r from-zinc-600 to-purple-500">
      <Header />
      <Routes>

        <Route path="/home" element={<Home></Home>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

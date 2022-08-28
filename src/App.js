import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import LandingPage from "./Pages/LandingPage/LadingPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import SetOfQuestion from "./Pages/TestQuestions/SetOfQuestion";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/setofquestion" element={<SetOfQuestion />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
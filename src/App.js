
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import BlogListing from "./pages/BlogListing.js";
import Calculator from "./pages/Calculator.js";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import VerifyEmail from "./pages/VerifyEmail.js";
import BlogDetail from "./components/BlogDetail.js";
import HealthCheck from "./pages/HealthCheck.js"
import Contact from "./pages/Contact.js";
import './App.css';




function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blogs" element={<BlogListing />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/calculator" element={<Calculator />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/blogs/:blogId" element={<BlogDetail />}/>
        <Route path="/verifyemail/:username" element={<VerifyEmail />} />
        <Route path="/healthz" element={<HealthCheck />} />
      </Routes>
  );
}

export default App;

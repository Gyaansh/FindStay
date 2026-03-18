import SingleListing from "./Pages/SingleListing";
import { Routes, Route } from "react-router-dom";
import "./tailwind.css";
import Signup from "./Pages/Signup";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Newlisting from "./Pages/NewListing";
function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Routes>
        <Route path="/listing/:id" element={<SingleListing />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/listing/new" element={<Newlisting/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </>
  );
}

export default App;

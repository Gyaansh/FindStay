import SingleListing from "./Pages/SingleListing";
import { Routes, Route } from "react-router-dom";
import "./tailwind.css";
import Signup from "./Pages/Signup";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Newlisting from "./Pages/NewListing";
import ProtectedRoute from "./Utils/ProtectedRoute";
import EditListing from "./EditListing";
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
        <Route path="/" element={<HomePage />} />
        <Route
          path="/listing/new"
          element={
            <ProtectedRoute>
              <Newlisting/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/listing/edit"
          element={
            <ProtectedRoute>
              <EditListing/>
            </ProtectedRoute>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
          <Route path="/listing/:id" element={<SingleListing />} />

      </Routes>
    </>
  );
}

export default App;

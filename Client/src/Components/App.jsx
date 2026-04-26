import SingleListingPage from "../Pages/SingleListingPage";
import { Routes, Route } from "react-router-dom";
import "./tailwind.css";
import Signup from "../Pages/Signup";
import { Toaster } from "react-hot-toast";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import Newlisting from "../Pages/NewListing";
import ProtectedRoute from "../Utils/ProtectedRoute";
import EditListingPage from "../Pages/EditListingPage";
import ProfilePage from "../Pages/ProfilePage";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer"
import Map from "./Map";
import PageNotFound from "../Pages/PageNotFound";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/listing/new"
            element={
              <ProtectedRoute>
                <Newlisting />
              </ProtectedRoute>
            }
          />
          <Route path="/map" element={<Map/>}/>
          <Route
            path="/listing/edit/:id"
            element={
              <ProtectedRoute>
                <EditListingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing/:id" element={<SingleListingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;

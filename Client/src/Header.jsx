import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  return (
    <header className="relative flex items-center justify-between px-6 py-3 bg-white shadow-md py-6">

  {/* Left */}
  <div
    onClick={() => navigate("/")}
    className="text-xl font-semibold cursor-pointer"
  >
    Home
  </div>

  {/* Center (absolute true center) */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <NavBar />
  </div>

  {/* Right */}
  <div className="flex items-center gap-4">
    <button
      onClick={() => navigate("/")}
      className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
    >
        All Listings
    </button>

    <button
      onClick={() => navigate("/listing/new")}
      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
    >
        Add New Listing
    </button>
  </div>

</header>
  );
}

export default Header;
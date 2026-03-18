import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 border-t w-full ">

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

        {/* Left - Brand */}
        <div>
          <h2 className="text-lg font-semibold mb-2">StayFinder</h2>
          <p className="text-sm text-gray-600">
            Find and list amazing places around you.
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex flex-col gap-2">
          <span className="font-medium">Explore</span>
          <button className="text-sm text-gray-600 hover:text-black text-left">
            <Link to="/" >Home</Link>
          </button>
          <button className="text-sm text-gray-600 hover:text-black text-left">
            <Link to="/" >All Listings</Link>
          </button>
          <button className="text-sm text-gray-600 hover:text-black text-left">
           <Link to="/listing/new"> Add New Listing</Link>
          </button>
        </div>

        {/* Right - Info */}
        <div>
          <span className="font-medium">Contact</span>
          <p className="text-sm text-gray-600 mt-2">
            <a href="mailto:support@stayfinder.com">support@stayfinder.com</a>
          </p>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} StayFinder. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;  
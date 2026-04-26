import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default function PageNotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
}

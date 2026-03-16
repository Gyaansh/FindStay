import gitLogo from '../assets/git.png';
import googleLogo from '../assets/google.webp'
const Signup = () => {
  return (
    <div className="min-h-screen bg-[#F6F3EE] flex items-center justify-center px-4 p-12">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create your account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2 " id='terms' />
            <span className="text-gray-600">
                <label htmlFor="terms">I agree to the Terms & Conditions</label>
              
            </span>
          </div>

          {/* Signup Button */}
          
          <button
            className="w-full py-2 rounded-md text-white font-medium bg-[#ea580c] 
                    hover:bg-[#d64c11] 
                    transition-all duration-150 
                    active:scale-95 active:shadow-inner"
          >
            Sign up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition transition-all duration-150 
                    active:scale-95 active:shadow-inner">
            <img
              src={googleLogo}
              alt="google"
              className="w-5 h-5"
            />
            Google
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition transition-all duration-150 
                    active:scale-95 active:shadow-inner">
            <img
              src={gitLogo}
              alt="github"
              className="w-5 h-5"
            />
            GitHub
          </button>
        </div>

        {/* Login link */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

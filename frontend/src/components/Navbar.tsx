import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("access");

  const handleLogout = () => {
    localStorage.removeItem("access");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Mentora
        </Link>

        <ul className="flex gap-4 items-center">
          {isAuthenticated ? (
            <>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

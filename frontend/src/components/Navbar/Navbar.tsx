import { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

interface NavbarState {
  isMenuOpen: boolean;
}

export default class Navbar extends Component<{}, NavbarState> {
  constructor(props: {}) {
    super(props);
    this.state = { isMenuOpen: false };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="bg-white p-4 shadow-md flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-full md:w-auto flex justify-between">
          {!this.state.isMenuOpen && (
            <h2 className="text-xl font-bold">BFF Trip</h2>
          )}
          <div className={(this.state.isMenuOpen?"flex justify-center items-center w-full":"")}>
            <button
              className="text-gray-600 md:hidden"
              onClick={this.toggleMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <BrowserRouter>
            <ul
              className={`mt-4 md:mt-0 md:flex md:items-center md:space-x-6 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/destination"
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
                >
                  Destination
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </BrowserRouter>
        </div>
      </nav>
    );
  }
}

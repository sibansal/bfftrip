import { Component } from "react";

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
      <nav className="bg-white w-full absolute min-h-10 px-4 py-2 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-full md:w-auto flex justify-between">
          {!this.state.isMenuOpen && (
            <h2 className="text-xl font-bold">BFF Trip</h2>
          )}
          <div
            className={
              this.state.isMenuOpen
                ? "flex justify-center items-center w-full"
                : ""
            }
          >
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
          <ul
            className={`mt-4 md:mt-0 md:flex md:items-center md:space-x-6 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="#home"
                className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#destination"
                className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
              >
                Destination
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-100"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

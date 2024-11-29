const hero_bg = "/assets/images/hero.jpg";

export const Header = () => {
  return (
    <header className="w-full h-full" id="home">
      <div className="pt-0">
        <div className="hero mt-0 w-full h-full flex items-center justify-center">
          <div className="h-full left-0 min-h-screen max-w-screen absolute w-full -z-10 bg-neutral-700">
            <img
              src={hero_bg}
              className="h-full left-0 min-h-screen max-w-screen absolute w-full -z-10 object-cover"
              style={{ filter: "grayscale(80%)" }}
              alt=""
            />
          </div>
          <div className="grid h-screen place-items-center">
            <div className="text-center">
              <div className="text-accent-cool text-2xl">
                "Discover. Explore. Repeat."
              </div>
              <div className="text-secondary-light text-4xl md:text-7xl m-5">
                Unleash your wanderlust with BFF Trip.
                <br />
                Trendy destinations, affordable packages, unforgettable
                experiences.
              </div>
              <div className="text-accent-cool text-2xl">
                Start your adventure today!
              </div>
              <div className="mt-5">
                <a href="#contact">
                  <button
                    className="px-6 py-3 text-xl text-neutral-700 bg-primary rounded-lg
                   hover:bg-secondary active:bg-secondary focus:ring-2
                    focus:bg-secondary focus:outline-none"
                  >
                    Book a trip now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

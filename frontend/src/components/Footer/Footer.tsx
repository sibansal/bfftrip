export const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
            <li><a href="https://www.facebook.com/bfftrip" className="hover:text-primary">Facebook</a></li>
              <li><a href="https://www.instagram.com/bff_trip" className="hover:text-primary">Instagram</a></li>
              <li><a href="https://linkedin.com/company/bfftrip" className="hover:text-primary">Linkedin</a></li>
              <li><a href="https://x.com/bfftrip" className="hover:text-primary">Twitter</a></li>
              <li><a href="https://www.youtube.com/@bfftripofficial" className="hover:text-primary">Youtube</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto: queries@bfftrip.in" className="hover:text-primary">queries@bfftrip.in</a></li>
              <li>Phone: <a href="tel:+919317537066" className="hover:text-primary">+91 9317537066</a></li>
              <li>Address: Ajauli, Una, Himachal Pradesh, India - 173025</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} bfftrip.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mt-18 p-6 transition-colors">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            DailyNews
          </h2>
          <p className="text-sm mt-1">Stay updated with the latest news</p>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a href="#!" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#!" className="hover:text-blue-500 transition">
            Contact
          </a>
          <a href="#!" className="hover:text-blue-500 transition">
            Privacy
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} DailyNews. All rights reserved.
      </div>
    </footer>
  );
}

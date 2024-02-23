const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <div>
              <h2 className="text-lg font-semibold mb-4">Explore</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-gray-400 transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="/browse" className="hover:text-gray-400 transition-colors duration-300">TV Shows</a>
                </li>
                <li>
                  <a href="/movies" className="hover:text-gray-400 transition-colors duration-300">Movies</a>
                </li>
                <li>
                  <a href="/latest" className="hover:text-gray-400 transition-colors duration-300">Latest</a>
                </li>
                <li>
                  <a href="/mylist" className="hover:text-gray-400 transition-colors duration-300">My List</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <a href="https://help.netflix.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">Help Center</a>
                </li>
                <li>
                  <a href="https://media.netflix.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">Media Center</a>
                </li>
                <li>
                  <a href="https://ir.netflix.net/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">Investor Relations</a>
                </li>
                <li>
                  <a href="https://jobs.netflix.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">Jobs</a>
                </li>
                <li>
                  <a href="https://help.netflix.com/legal/termsofuse" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm">
            Netflix Clone - This project is for learning purposes only. All rights for the original content belong to Netflix.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-orange-950 pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Davenport Solar
            </h3>
            <p className="text-gray-400">
              Premium solar installations with 25-year warranty. Locally owned, family operated. Serving Davenport, Haines City, Kissimmee, and all of Central Florida.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
            <p className="text-gray-400">Davenport, Florida</p>
            <Link
              href="https://davenportsolar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              davenportsolar.com
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-orange-900 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Davenport Solar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

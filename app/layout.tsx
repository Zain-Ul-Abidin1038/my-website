/* eslint-disable react/no-unescaped-entities */
import './globals.css'; // Ensure Tailwind CSS is imported
import Link from 'next/link';

export const metadata = {
  title: "Mohsin Javaid's Shop",
  description: "Explore products and services on Mohsin Javaid's one-page shop.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
              <h1 className="text-2xl text-black font-semibold">Mohsin Javaid's Shop</h1>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer role="contentinfo" className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center">
            <p>
              © {new Date().getFullYear()} Mohsin Javaid. All rights reserved.
            </p>
            <p className="mt-2">
              Made with ❤️ by{' '}
              <Link href="/" className="text-blue-400" aria-label="Homepage link">
                Mohsin
              </Link>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;

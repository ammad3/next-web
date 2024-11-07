import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-950 p-4 border-b-4 border-red-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">AmmadSheikh</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
          </li>
          <li>
            <Link href="/contacts" className="text-gray-300 hover:text-white">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}

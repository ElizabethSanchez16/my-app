import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';
import '../styles/components.css';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/LogoCEPI.PNG" 
            alt="Logo CEPI" 
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-semibold">CEPI Cégep de Jonquière</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <Link href="/blog/new" className="hover:text-blue-600">Blog</Link>
          <Image 
            src="/images/perfil-empty.png" 
            alt="Profil" 
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </nav>
    </header>
  );
}
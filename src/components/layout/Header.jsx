import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link href="/" className="text-primary font-semibold text-2xl">
          January Pizza
        </Link>
        <nav className="flex gap-8 items-center text-gray-500 font-semibold">
          <Link href="/home">Home</Link>
          <Link href="/menu">Menu</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>
          <Link href="/login" className="bg-primary text-white px-8 py-2 rounded-full">
            Login
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link href="/">Home</Link>
      {/* <Link href="/pages/about">About</Link>
      <Link href="/pages/projects">Projects</Link>
      <Link href="/pages/contact">Contact</Link> */}
    </nav>
  );
}
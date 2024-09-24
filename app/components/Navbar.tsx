import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="py-6 max-w-2xl mx-auto px-4">
      <div>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:underline">About</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const AdminHeader = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between flex-wrap">

        {/* Left side - Site branding */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt="Payload CMS"
              width={32}
              height={32}
              className="flex-shrink-0"
            />
            <span className="font-semibold text-lg">Payload Admin</span>
          </Link>
        </div>

        {/* Right side - Nav toggler & user info */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="sm:hidden p-2 rounded-md hover:bg-muted/50 transition-colors"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          {/* Quick links */}
          <nav className="hidden sm:block">
            <ul className="flex gap-4">
              <li>
                <Link
                  href="/"
                  className={pathname === "/" || pathname.startsWith("/pages") ? "text-primary" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/collections/pages"
                  className={pathname.includes("/pages") ? "text-primary" : ""}
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/collections/posts"
                  className={pathname.includes("/posts") ? "text-primary" : ""}
                >
                  Posts
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        <div
          className={mobileMenuOpen ? "block sm:hidden" : "hidden"}
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col gap-4 p-4 bg-card border-t">
            <li>
              <Link href="/" className="font-medium">Home</Link>
            </li>
            <li>
              <Link href="/admin/collections/pages" className="font-medium">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/admin/collections/posts" className="font-medium">
                Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isLearn = pathname.startsWith("/learn");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50
        bg-(--color-bg-card)
        transition-shadow duration-300
        ${scrolled ? "shadow-lg" : "shadow-none"}
        border-b border-(--color-border)
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex flex-col leading-tight hover-scale">
          <span className="text-xl font-bold text-gradient-orange">
            TypeBharat
          </span>
          <span className="text-xs text-(--color-text-muted)">
            English → Indian languages
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* Intent switch */}
          <NavLink href="/" active={!isLearn}>Typing</NavLink>
          <NavLink href="/learn" active={isLearn}>Learn</NavLink>

          <div className="h-5 w-px bg-(--color-border)" />

          {/* Language toggle */}
          {isLearn ? (
            <>
              <NavLink href="/learn/panjabi">Panjabi</NavLink>
              <NavLink href="/learn/hindi">Hindi</NavLink>
            </>
          ) : (
            <>
              <NavLink href="/panjabi-typing">Panjabi</NavLink>
              <NavLink href="/hindi-typing">Hindi</NavLink>
            </>
          )}

          <span className="text-(--color-text-muted) cursor-not-allowed">
            Gujarati
          </span>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden btn-secondary text-sm"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-(--color-border) bg-(--color-bg-card) animate-slide-up">
          <div className="px-6 py-4 space-y-4 text-sm">
            {/* Intent */}
            <div className="flex gap-3">
              <MobileLink href="/" onClick={() => setMobileOpen(false)}>
                Typing
              </MobileLink>
              <MobileLink href="/learn" onClick={() => setMobileOpen(false)}>
                Learn
              </MobileLink>
            </div>

            <div className="border-t border-(--color-border)" />

            {/* Languages */}
            {isLearn ? (
              <>
                <MobileLink href="/learn/panjabi" onClick={() => setMobileOpen(false)}>
                  Learn Panjabi
                </MobileLink>
                <MobileLink href="/learn/hindi" onClick={() => setMobileOpen(false)}>
                  Learn Hindi
                </MobileLink>
              </>
            ) : (
              <>
                <MobileLink href="/panjabi-typing" onClick={() => setMobileOpen(false)}>
                  Panjabi Typing
                </MobileLink>
                <MobileLink href="/hindi-typing" onClick={() => setMobileOpen(false)}>
                  Hindi Typing
                </MobileLink>
              </>
            )}

            <div className="text-(--color-text-muted)">
              Gujarati (coming soon)
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- helpers ---------------- */

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        transition-colors
        ${active
          ? "text-(--color-primary) font-medium"
          : "text-(--color-text-body) hover:text-(--color-primary)"
        }
      `}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-lg font-medium text-(--color-text-heading) hover:text-(--color-primary)"
    >
      {children}
    </Link>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About OPSIX", href: "#about" },
    { name: "Magic Contact", href: "#product" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "AI Tech", href: "#ai" },
    { name: "Use Cases", href: "#use-cases" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-lg transition-transform group-hover:scale-110">
            <Cpu className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <span className="text-2xl font-headline font-bold tracking-tighter text-primary">OPSIX</span>
            <span className="hidden md:block text-[10px] font-medium text-muted-foreground -mt-1 uppercase tracking-widest">Intelligent eXcellence</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild className="rounded-full shadow-lg hover:shadow-primary/20">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2 border-b border-muted last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}

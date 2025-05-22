// MobileNav.tsx
"use client";
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image
import { Separator } from "@/components/ui/separator";
import { FaUser } from "react-icons/fa"; // Import FaUser for the login button

interface NavLinkItem {
  href: string;
  name: string; // Matching the structure from Navbar.tsx
}

interface MobileNavProps {
  logoSrc: string;
  logoAlt: string;
  navLinks: NavLinkItem[];
}

const MobileNav: React.FC<MobileNavProps> = ({ logoSrc, logoAlt, navLinks }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    // The root of MobileNav is now just the Sheet component.
    // Positioning of the trigger is handled by the parent Navbar.
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {/* Using 'ghost' variant for a cleaner look in the navbar */}
        <Button variant="ghost" size="icon" aria-label="Open navigation menu">
          <Menu className="h-6 w-6 text-neutral-700" /> {/* Icon color to match navbar text */}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[320px] p-0 bg-white flex flex-col"> {/* Added flex flex-col */}
        <SheetHeader className="p-4 pb-2 border-b"> {/* Adjusted padding */}
          <div className="flex justify-between items-center">
            <SheetTitle>
              <Link href="/" onClick={() => setIsOpen(false)} className="block">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={160} // Slightly smaller logo for the sheet
                  height={55}
                  className="object-contain"
                />
              </Link>
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close navigation menu">
                <X className="h-6 w-6 text-neutral-700" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <nav className="flex flex-col space-y-1 p-4 overflow-y-auto"> {/* Links area */}
          {navLinks.map((link) => (
            <SheetClose asChild key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)} // Ensure close on navigate
                className="text-base font-medium text-gray-700 hover:text-[#8CC63F] hover:bg-gray-100 py-3 px-3 rounded-md transition-colors duration-150 ease-in-out block"
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t"> {/* Login button at the bottom */}
          <SheetClose asChild>
            <Link
              href="/login" // Use your actual login path
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full bg-[#8CC63F] hover:bg-[#7BB53A] text-white font-semibold px-5 py-2.5 rounded-md text-base shadow-sm transition-colors duration-200"
            >
              <FaUser className="mr-2 h-4 w-4" />
              LOGIN
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
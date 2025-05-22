// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Or your preferred font
import './globals.css'; // Your global styles, including Tailwind

const inter = Inter({ subsets: ['latin'] });

// You can define your brand color here or import it
const primaryBrandColor = '#8CC63F'; // From your theme
const lighterBrandColor = '#A7F3D0'; // Lighter variant (e.g., Tailwind green-200)


export const metadata: Metadata = {
  title: 'Heathrow Budget Parking', // Default title, can be overridden per page
  description: 'Affordable and secure parking at Heathrow.', // Default description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}> {/* antialiased for smoother fonts */}
        {/* Main wrapper for the entire app - needs to be relative for absolute children */}

          {/* Page content will be rendered here */}
          {children} 
      </body>
    </html>
  );
}
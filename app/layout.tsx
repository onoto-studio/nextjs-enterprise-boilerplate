import "styles/tailwind.css";
import { GeistSans } from '@vercel/font/geist-sans';

const geist = GeistSans(); // Initialise la police Geist

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}> {/* Applique la classe Geist ici */}
      <body>{children}</body>
    </html>
  );
}

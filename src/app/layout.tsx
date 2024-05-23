import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BLISS BOMBS™ from HempLand® USA',
  description:
    "HempLand USA BLISS BOMBS™ blow away ALL hemp gummies. They contain far more of hemp's good stuff, 135mg, plus a fusion of unique plant extracts that work synergistically with our premium hemp extract to deliver an explosion of long lasting bliss!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import { Providers } from '@/src/lib/redux/provider';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import '@/src/app/styles/globals.css';

export const metadata = {
  title: 'E-commerce Product Listing',
  description: 'Browse our wide selection of products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
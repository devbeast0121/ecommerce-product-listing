import { Suspense } from 'react';
import ProductGrid from '@/src/components/ProductGrid';
import SearchBar from '@/src/components/SearchBar';
import SortDropdown from '@/src/components/SortDropdown';
import { Product } from '@/src/types';

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Home() {
  const initialProducts = await getProducts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Listing</h1>
      <div className="flex justify-between mb-4">
        <SearchBar />
        <SortDropdown />
      </div>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductGrid initialProducts={initialProducts} />
      </Suspense>
    </main>
  );
}
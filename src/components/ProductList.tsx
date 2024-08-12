'use client';

import { useAppSelector } from '@/src/lib/redux/hooks';
import ProductCard from './ProductCard';

export default function ProductList() {
    const products = useAppSelector((state) => state.products.filteredProducts);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
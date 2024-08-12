'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/src/lib/redux/hooks';
import { setProducts } from '@/src/lib/redux/productSlice';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import { Product } from '@/src/types';

interface ProductGridProps {
    initialProducts: Product[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.filteredProducts);

    useEffect(() => {
        dispatch(setProducts(initialProducts));
    }, [dispatch, initialProducts]);

    if (products.length === 0) {
        return <LoadingSpinner />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index === 0} />
            ))}
        </div>
    );
}
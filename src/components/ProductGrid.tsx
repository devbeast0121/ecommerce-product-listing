'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/src/lib/redux/hooks';
import { setProducts, loadMoreProducts } from '@/src/lib/redux/productSlice';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import { Product } from '@/src/types';

interface ProductGridProps {
    initialProducts: Product[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
    const dispatch = useAppDispatch();
    const visibleProducts = useAppSelector((state) => state.products.visibleProducts);
    const filteredProducts = useAppSelector((state) => state.products.filteredProducts);
    const observerTarget = useRef(null);

    useEffect(() => {
        dispatch(setProducts(initialProducts));
    }, [dispatch, initialProducts]);

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting && visibleProducts.length < filteredProducts.length) {
            dispatch(loadMoreProducts());
        }
    }, [dispatch, visibleProducts.length, filteredProducts.length]);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (observerTarget.current) observer.observe(observerTarget.current);

        return () => {
            if (observerTarget.current) observer.unobserve(observerTarget.current);
        }
    }, [handleObserver]);

    if (visibleProducts.length === 0) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {visibleProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} priority={index === 0} />
                ))}
            </div>
            <div ref={observerTarget} className="h-10 mt-4">
                {visibleProducts.length < filteredProducts.length && <LoadingSpinner />}
            </div>
        </>
    );
}
'use client';

import Image from 'next/image';
import { useAppDispatch } from '@/src/lib/redux/hooks';
import { addToCart } from '@/src/lib/redux/cartSlice';
import { Product } from '@/src/types';

interface ProductCardProps {
    product: Product;
    priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
    const dispatch = useAppDispatch();

    return (
        <div className="bg-card-bg border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="relative w-full aspect-square mb-4">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={priority}
                />
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description.slice(0, 100)}...</p>
            <p className="text-lg font-bold mb-2 text-price">${product.price.toFixed(2)}</p>
            <p className="mb-4">Rating: {product.rating}/5</p>
            <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-accent text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Add to Cart
            </button>
        </div>
    );
}
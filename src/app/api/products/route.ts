import { NextResponse } from 'next/server';
import { Product } from '@/src/types';

const products: Product[] = [
    {
        id: 1,
        title: 'Product 1',
        description: 'This is a description',
        price: 20.99,
        rating: 4.3,
        image: '/assets/images/Product_6.png',
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'This is a description',
        price: 19.99,
        rating: 4.0,
        image: '/assets/images/Product_5.png',
    },
    {
        id: 3,
        title: 'Product 3',
        description: 'This is a description',
        price: 21.99,
        rating: 4.2,
        image: '/assets/images/Product_4.png',
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'This is a description',
        price: 22.99,
        rating: 4.1,
        image: '/assets/images/Product_3.png',
    },
    {
        id: 5,
        title: 'Product 5',
        description: 'This is a description',
        price: 23.99,
        rating: 4.7,
        image: '/assets/images/Product_2.png',
    },
    {
        id: 6,
        title: 'Product 6',
        description: 'This is a description',
        price: 24.99,
        rating: 4.6,
        image: '/assets/images/Product_1.png',
    },
    {
        id: 7,
        title: 'Product 7',
        description: 'This is a description',
        price: 20.99,
        rating: 4.3,
        image: '/assets/images/Product_6.png',
    },
    {
        id: 8,
        title: 'Product 8',
        description: 'This is a description',
        price: 19.99,
        rating: 4.0,
        image: '/assets/images/Product_5.png',
    },
    {
        id: 9,
        title: 'Product 9',
        description: 'This is a description',
        price: 21.99,
        rating: 4.2,
        image: '/assets/images/Product_4.png',
    },
    {
        id: 10,
        title: 'Product 10',
        description: 'This is a description',
        price: 22.99,
        rating: 4.1,
        image: '/assets/images/Product_3.png',
    },
    {
        id: 11,
        title: 'Product 11',
        description: 'This is a description',
        price: 23.99,
        rating: 4.7,
        image: '/assets/images/Product_2.png',
    },
    {
        id: 12,
        title: 'Product 12',
        description: 'This is a description',
        price: 24.99,
        rating: 4.6,
        image: '/assets/images/Product_1.png',
    },
    {
        id: 13,
        title: 'Product 13',
        description: 'This is a description',
        price: 21.99,
        rating: 4.2,
        image: '/assets/images/Product_4.png',
    },
    {
        id: 14,
        title: 'Product 14',
        description: 'This is a description',
        price: 22.99,
        rating: 4.1,
        image: '/assets/images/Product_3.png',
    },
    {
        id: 15,
        title: 'Product 15',
        description: 'This is a description',
        price: 23.99,
        rating: 4.7,
        image: '/assets/images/Product_2.png',
    },
    {
        id: 16,
        title: 'Product 16',
        description: 'This is a description',
        price: 24.99,
        rating: 4.6,
        image: '/assets/images/Product_1.png',
    }

];

export async function GET() {
    return NextResponse.json(products);
}
'use client';

import { useAppSelector } from '@/src/lib/redux/hooks';

export default function Header() {
    const cartItems = useAppSelector((state) => state.cart.items);
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <header className="bg-header-bg text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">E-commerce Store</h1>
                <div>
                    <span className="mr-4">Cart: {itemCount} items</span>
                    <span>Total: ${totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </header>
    );
}
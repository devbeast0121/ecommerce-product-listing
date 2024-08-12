'use client';

import { useAppDispatch } from '@/src/lib/redux/hooks';
import { setSearchTerm } from '@/src/lib/redux/productSlice';

export default function SearchBar() {
    const dispatch = useAppDispatch();

    return (
        <div>
            <label htmlFor="search" className="sr-only">Search products</label>
            <input
                id="search"
                type="text"
                placeholder="Search products..."
                className="border rounded-lg px-4 py-2 w-44 md:w-64"
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
        </div>
    );
}
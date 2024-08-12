'use client';

import { useAppDispatch } from '@/src/lib/redux/hooks';
import { setSortBy } from '@/src/lib/redux/productSlice';

export default function SortDropdown() {
    const dispatch = useAppDispatch();

    return (
        <div>
            <label htmlFor="sort" className="sr-only">Sort products</label>
            <select
                id="sort"
                className="border rounded-lg px-4 py-2"
                onChange={(e) => dispatch(setSortBy(e.target.value as 'price' | 'rating' | ''))}
            >
                <option value="">Sort by</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    );
}
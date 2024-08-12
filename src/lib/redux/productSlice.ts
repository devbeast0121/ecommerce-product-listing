import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/src/types';

interface ProductState {
    products: Product[];
    filteredProducts: Product[];
    searchTerm: string;
    sortBy: 'price' | 'rating' | '';
}

const initialState: ProductState = {
    products: [],
    filteredProducts: [],
    searchTerm: '',
    sortBy: '',
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
            applyFilters(state);
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
            applyFilters(state);
        },
        setSortBy: (state, action: PayloadAction<'price' | 'rating' | ''>) => {
            state.sortBy = action.payload;
            applyFilters(state);
        },
    },
});

function applyFilters(state: ProductState) {
    let filtered = state.products.filter(product =>
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    if (state.sortBy === 'price') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    state.filteredProducts = filtered;
}

export const { setProducts, setSearchTerm, setSortBy } = productSlice.actions;
export default productSlice.reducer;
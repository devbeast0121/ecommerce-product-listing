import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/src/types';

interface ProductState {
    products: Product[];
    filteredProducts: Product[];
    visibleProducts: Product[];
    searchTerm: string;
    sortBy: 'price' | 'rating' | '';
    page: number;
}

const initialState: ProductState = {
    products: [],
    filteredProducts: [],
    visibleProducts: [],
    searchTerm: '',
    sortBy: '',
    page: 1,
};

const PRODUCTS_PER_PAGE = 10;

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
            applyFilters(state);
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
            state.page = 1;
            applyFilters(state);
        },
        setSortBy: (state, action: PayloadAction<'price' | 'rating' | ''>) => {
            state.sortBy = action.payload;
            state.page = 1;
            applyFilters(state);
        },
        loadMoreProducts: (state) => {
            state.page += 1;
            state.visibleProducts = state.filteredProducts.slice(0, state.page * PRODUCTS_PER_PAGE);
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
    state.visibleProducts = filtered.slice(0, state.page * PRODUCTS_PER_PAGE);
}

export const { setProducts, setSearchTerm, setSortBy, loadMoreProducts } = productSlice.actions;
export default productSlice.reducer;
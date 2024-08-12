import { render, screen } from '@testing-library/react'
import ProductCard from '../ProductCard'
import { Provider } from 'react-redux'
import { store } from '@/src/lib/redux/store'

jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, fill, sizes, style, priority, ...props }: any) => {
        return <img
            alt={alt}
            src={src}
            {...props}
            data-testid="next-image"
            data-fill={fill ? "true" : undefined}
            data-sizes={sizes}
            data-priority={priority ? "true" : undefined}
            style={{ ...style, objectFit: style?.objectFit }}
        />
    },
}));

const mockProduct = {
    id: 1,
    title: 'Test Product',
    description: 'This is a test product',
    price: 19.99,
    rating: 4.5,
    image: '/test-image.jpg',
}

describe('ProductCard', () => {
    it('renders product information correctly', () => {
        render(
            <Provider store={store}>
                <ProductCard product={mockProduct} />
            </Provider>
        )
        expect(screen.getByText(mockProduct.title)).toBeInTheDocument()
        expect(screen.getByText(`${mockProduct.description}...`)).toBeInTheDocument()
        expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument()
        expect(screen.getByText(`Rating: ${mockProduct.rating}/5`)).toBeInTheDocument()

        const image = screen.getByTestId('next-image');
        expect(image).toHaveAttribute('src', mockProduct.image);
        expect(image).toHaveAttribute('alt', mockProduct.title);
        expect(image).toHaveAttribute('data-fill', 'true');
    })

    it('has an "Add to Cart" button', () => {
        render(
            <Provider store={store}>
                <ProductCard product={mockProduct} />
            </Provider>
        )
        const addButton = screen.getByRole('button', { name: /add to cart/i })
        expect(addButton).toBeInTheDocument()
    })
})
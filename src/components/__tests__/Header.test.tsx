import { render, screen } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import { store } from '@/src/lib/redux/store'

describe('Header', () => {
    it('renders the store name', () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        )
        const storeName = screen.getByText('E-commerce Store')
        expect(storeName).toBeInTheDocument()
    })

    it('displays cart information', () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        )
        const cartInfo = screen.getByText(/Cart:/)
        expect(cartInfo).toBeInTheDocument()
    })
})
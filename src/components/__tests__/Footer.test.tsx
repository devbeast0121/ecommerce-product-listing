import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
    it('renders the current year', () => {
        render(<Footer />)
        const currentYear = new Date().getFullYear().toString()
        expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
    })

    it('displays the producer name', () => {
        render(<Footer />)
        const producerName = screen.getByText(/Vitto Lewerissa/)
        expect(producerName).toBeInTheDocument()
    })

    it('includes the copyright notice', () => {
        render(<Footer />)
        const copyright = screen.getByText(/All rights reserved/)
        expect(copyright).toBeInTheDocument()
    })
})
// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Index from '../src/pages/index.tsx'
import '@testing-library/jest-dom'

// Unit Test #1
describe('Index', () => {
    it('renders a heading', () => {
        render(<Index />)

        const link = screen.getByRole('link', {
            name: /By Vercel Logo/i,
        })

        expect(link).toBeInTheDocument()
    })
})

// Unit Test #2
describe('Index', () => {
    it('renders a heading', () => {
        render(<Index />)

        const image = screen.getByRole('img', {
            name: /Vercel Logo/i,
        })

        expect(image).toBeInTheDocument()
    })
})
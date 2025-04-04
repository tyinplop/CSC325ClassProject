import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'

describe('Hero', () => {
  it('renders a heading (h1)', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders a subheading (text paragraph)', () => {
    render(<Hero />)

    // Match on part of the text so the entire string need not match exactly
    const subheading = screen.getByText(/Explore our cutting-edge dashboard/i)
    expect(subheading).toBeInTheDocument()
  })

  it('renders a CTA button', () => {
    render(<Hero />)

    const ctaButton = screen.getByRole('button', { name: /start now/i })
    expect(ctaButton).toBeInTheDocument()
  })

  it('renders the Hero visual', () => {
    const { container } = render(<Hero />)

    // Because it's not a standard <img> element, we select it by ID
    const heroVisual = document.getElementById('image')
    expect(heroVisual).toBeInTheDocument()
  })
})

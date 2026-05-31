import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should display the SOULCAP brand heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'SOULCAP' })).toBeInTheDocument()
  })

  it('should display the Explore section', () => {
    render(<Footer />)
    expect(screen.getByText('Explore')).toBeInTheDocument()
  })

  it('should display the Policies section', () => {
    render(<Footer />)
    expect(screen.getByText('Policies')).toBeInTheDocument()
  })

  it('should have social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('should display the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('should link to the privacy policy', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const privacy = links.find((link) => link.getAttribute('href') === '/privacy-policy')
    expect(privacy).toBeDefined()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

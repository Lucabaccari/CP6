import { useEffect, useState } from 'react'
import { navigation } from '../data/portfolio'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-22% 0px -62%', threshold: [0, 0.15, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.classList.remove('menu-is-open')
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Luca Baccari — voltar ao início">
          
          <span className="brand-copy">
            <strong>Luca Baccari</strong>
            <small>engenharia de software</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          <span className="nav-comment" aria-hidden="true">// navegação</span>
          <ul>
            {navigation.map((item, index) => {
              const id = item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    className={activeSection === id ? 'active' : ''}
                    href={item.href}
                    aria-current={activeSection === id ? 'location' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>0{index + 1}.</span>{item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

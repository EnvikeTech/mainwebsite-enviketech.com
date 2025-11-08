import Link from 'next/link'

export default function Products(){
  return (
    <div>
      <header className="header container">
        <a className="brand" href="/">
          <img src="/logo.svg" alt="EnvikeTech" className="logo" />
          <strong>EnvikeTech</strong>
        </a>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <h1>Products</h1>
        <div className="grid">
          <article className="card"><h3>Product A</h3><p>Collaboration suite for teams.</p></article>
          <article className="card"><h3>Product B</h3><p>Analytics platform.</p></article>
          <article className="card"><h3>Product C</h3><p>Developer tooling and integrations.</p></article>
        </div>
      </main>

      <footer className="footer container">
        <div>
          <strong>EnvikeTech Pvt. Ltd.</strong>
        </div>
      </footer>
    </div>
  )
}

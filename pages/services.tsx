import Link from 'next/link'

export default function Services(){
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
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <h1>Services</h1>
        <div className="grid">
          <article className="card"><h3>Product Discovery</h3><p>Research, prototypes and validation.</p></article>
          <article className="card"><h3>Design & UX</h3><p>Human-centered design and testing.</p></article>
          <article className="card"><h3>Engineering</h3><p>Full-stack development and cloud-native architectures.</p></article>
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

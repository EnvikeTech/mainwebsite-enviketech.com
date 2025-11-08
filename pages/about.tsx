import Link from 'next/link'

export default function About(){
  return (
    <div>
      <header className="header container">
        <a className="brand" href="/">
          <img src="/logo.svg" alt="EnvikeTech" className="logo" />
          <strong>EnvikeTech</strong>
        </a>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <h1>About EnvikeTech</h1>
        <p>We design and build software products and deliver engineering services that help organizations grow.</p>
      </main>

      <footer className="footer container">
        <div>
          <strong>EnvikeTech Pvt. Ltd.</strong>
        </div>
      </footer>
    </div>
  )
}

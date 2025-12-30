import Link from 'next/link'

export default function Contact(){
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
          <Link href="/products">Products</Link>
        </nav>
      </header>

      <main className="container">
        <h1>Contact</h1>
        <p>Send us a message at <a href="mailto:hello@enviketech.com">hello@enviketech.com</a> or use the contact API.</p>
      </main>

      <footer className="footer container">
        <div>
          <strong>Envike Tech Pvt. Ltd.</strong>
        </div>
      </footer>
    </div>
  )
}

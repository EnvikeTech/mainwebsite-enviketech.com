import Link from 'next/link'

export default function Home(){
  return (
    <div>
      <header className="header container">
        <a className="brand" href="/">
          <img src="/logo.svg" alt="EnvikeTech" className="logo" />
          <strong>EnvikeTech</strong>
        </a>
        <nav className="nav">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Build. Transform. Grow.</h1>
          <p>Product, design and engineering services to accelerate your business.</p>
          <p><a className="btn" href="/services">See services</a></p>
        </section>

        <section className="grid">
          <article className="card">
            <h3>Product Strategy</h3>
            <p>Discovery, roadmaps and product coaching.</p>
          </article>
          <article className="card">
            <h3>Custom Software</h3>
            <p>Web, mobile and APIs built with modern stacks.</p>
          </article>
          <article className="card">
            <h3>Managed Delivery</h3>
            <p>Ongoing product teams and SRE.</p>
          </article>
        </section>
      </main>

      <footer className="footer container">
        <div>
          <strong>EnvikeTech Pvt. Ltd.</strong>
          <p>Innovative services &amp; products.</p>
        </div>
      </footer>
    </div>
  )
}

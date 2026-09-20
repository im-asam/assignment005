import bannerStack from '../assets/banner-stack.png'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">DEVELOPER TOOLKIT</p>
        <h1>Build Your Ideal<br /><span>Development Stack</span></h1>
        <p>Explore frontend, backend, database, and tooling options. Compare them side by side, then build the stack that fits your next project.</p>
        <div className="hero-actions"><a className="primary" href="#technologies">Explore Technologies</a><a className="secondary" href="#about">Learn More</a></div>
      </div>
      <img className="hero-art" src={bannerStack} alt="Colorful development stack illustration" />
    </section>
  )
}

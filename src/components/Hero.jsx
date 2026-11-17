function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
      <div className="hero-copy reveal">
        <p className="eyebrow"><span></span> Software · AI · Digital Services</p>
        <h1>Technology that moves <em>ideas</em> into action.</h1>
        <p className="hero-lead">Customized, secure and scalable digital solutions for government departments, institutions and growing businesses.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#services">Explore our services <i className="fa-solid fa-arrow-down"></i></a>
          <a className="text-link" href="#about">Meet Shreesarv <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="code-window">
          <div className="window-top"><i></i><i></i><i></i><span>intelligence.system</span></div>
          <div className="code-body">
            <span className="line">01</span><span><b className="accent">const</b> betterTomorrow = <b className="blue">true</b>;</span>
            <span className="line">02</span><span><b className="accent">build</b>({'{'}</span>
            <span className="line">03</span><span>&nbsp;&nbsp;software: <b className="blue">“scalable”</b>,</span>
            <span className="line">04</span><span>&nbsp;&nbsp;intelligence: <b className="blue">“practical”</b>,</span>
            <span className="line">05</span><span>&nbsp;&nbsp;impact: <b className="blue">“measurable”</b></span>
            <span className="line">06</span><span>{'}'});</span>
          </div>
        </div>
        <div className="float-chip chip-ai"><i className="fa-solid fa-wand-magic-sparkles"></i> AI ready</div>
        <div className="float-chip chip-secure"><i className="fa-solid fa-shield-halved"></i> Secure by design</div>
      </div>
      <div className="scroll-note"><span></span> Scroll to discover</div>
    </section>
  )
}

export default Hero

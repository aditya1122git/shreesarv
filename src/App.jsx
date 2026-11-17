import { useEffect, useState } from 'react'
import './App.css'

const services = [
  { icon: 'fa-code', title: 'Custom Software', text: 'Enterprise applications, ERP, CRM, HRMS, MIS, workflow automation and third-party integrations.' },
  { icon: 'fa-globe', title: 'Web Platforms', text: 'Responsive websites, content management systems, citizen portals and administrative dashboards.' },
  { icon: 'fa-mobile-screen-button', title: 'Web & Mobile Apps', text: 'Custom web apps, Android and iOS applications, PWAs, field tools and real-time reporting.' },
  { icon: 'fa-wand-magic-sparkles', title: 'AI & Automation', text: 'Generative AI, LLM integrations, chatbots, document processing and multilingual intelligence.' },
  { icon: 'fa-chart-line', title: 'Data & BI', text: 'Management dashboards, analytics, GIS applications, automated reporting and decision support.' },
  { icon: 'fa-shield-halved', title: 'Cybersecurity & QA', text: 'Secure development, access control, vulnerability assessment, functional and performance testing.' },
]

const allServices = [
  'Custom Software Development', 'Website Development & Management', 'Web & Mobile App Development',
  'AI & Automation', 'Social Media & Digital Communication', 'Government IT & e-Governance',
  'Software Maintenance & Support', 'Database, Cloud & Infrastructure', 'Data Analytics & Business Intelligence',
  'Cybersecurity & Quality Assurance', 'IT Consultancy & Digital Transformation', 'Dashboard', 'Watch Tower',
]

const steps = [
  ['01', 'Understand', 'We study requirements, current systems, objectives and constraints.'],
  ['02', 'Design', 'We define the solution, architecture, interface, features and delivery plan.'],
  ['03', 'Develop', 'We build the software and integrate the technologies the project needs.'],
  ['04', 'Test', 'We check function, compatibility, performance and security.'],
  ['05', 'Deploy', 'We implement in the agreed environment with the required documentation.'],
  ['06', 'Maintain', 'We provide agreed support, upgrades and feature enhancements.'],
]

const sectors = [
  ['fa-landmark', 'Government & PSUs'], ['fa-graduation-cap', 'Education'], ['fa-hospital', 'Healthcare'],
  ['fa-building', 'Enterprise'], ['fa-rocket', 'Startups'], ['fa-hand-holding-heart', 'NGOs'],
  ['fa-bullhorn', 'Media & Communications'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a href="#top" className="wordmark" aria-label="Shreesarv Intelligence home" onClick={closeMenu}>
          <span className="mark">S</span>
          <span>SHREESARV<br /><small>INTELLIGENCE</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span></span><span></span>
        </button>
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Start a project <i className="fa-solid fa-arrow-right"></i></a>
        </nav>
      </header>

      <main id="top">
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

        <section className="ticker" aria-label="Core capabilities">
          <div>SOFTWARE DEVELOPMENT <i className="fa-solid fa-asterisk"></i> ARTIFICIAL INTELLIGENCE <i className="fa-solid fa-asterisk"></i> DIGITAL TRANSFORMATION <i className="fa-solid fa-asterisk"></i> E-GOVERNANCE <i className="fa-solid fa-asterisk"></i> DATA ANALYTICS <i className="fa-solid fa-asterisk"></i> SOFTWARE DEVELOPMENT</div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-label reveal">01 / ABOUT</div>
          <div className="about-grid">
            <h2 className="reveal">One technology partner.<br /><span>Every digital layer.</span></h2>
            <div className="about-copy reveal">
              <p>Shreesarv Intelligence Pvt. Ltd. delivers end-to-end IT services for government departments, PSUs, educational institutions, businesses and private organizations.</p>
              <p>We connect software engineering, artificial intelligence, analytics and digital communication to create systems built around real operational needs.</p>
              <div className="value-row">
                <div><strong>Customized</strong><span>Built for specific requirements</span></div>
                <div><strong>Secure</strong><span>Appropriate controls by design</span></div>
                <div><strong>Scalable</strong><span>Ready for future expansion</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-label light reveal">02 / WHAT WE DO</div>
          <div className="section-heading reveal">
            <h2>Capabilities for the<br /><span>complete digital journey.</span></h2>
            <p>From a first requirement workshop to deployment and long-term support.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card reveal" key={service.title}>
                <div className="service-top"><span>{String(index + 1).padStart(2, '0')}</span><i className={`fa-solid ${service.icon}`}></i></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <i className="fa-solid fa-arrow-up-right-from-square card-arrow"></i>
              </article>
            ))}
          </div>
          <div className="all-services reveal">
            <div className="all-services-heading"><h3>All 13 service areas</h3><p>Choose an area to explore our full capability set.</p></div>
            <div className="service-list">
              {allServices.map((name, index) => (
                <button key={name} onClick={() => setServiceOpen(serviceOpen === index ? -1 : index)} aria-expanded={serviceOpen === index}>
                  <span><b>{String(index + 1).padStart(2, '0')}</b>{name}</span>
                  <i className={`fa-solid ${serviceOpen === index ? 'fa-minus' : 'fa-plus'}`}></i>
                  <small className={serviceOpen === index ? 'shown' : ''}>
                    {index === 11 ? 'Live KPI views, role-based dashboards, GIS insights, alerts and automated reports.' : index === 12 ? 'Social listening, sentiment, news monitoring, multilingual analysis and AI-generated briefs.' : 'Solutions tailored to requirements, technical feasibility and the agreed project scope.'}
                  </small>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section approach-section">
          <div className="section-label reveal">03 / HOW WE WORK</div>
          <div className="approach-intro reveal">
            <h2>A clear path from requirement<br />to reliable software.</h2>
            <p>Our development approach keeps scope, decisions and delivery visible at every stage.</p>
          </div>
          <div className="timeline">
            {steps.map(([number, title, text]) => (
              <article className="step reveal" key={number}>
                <span className="step-number">{number}</span><div><i className="fa-solid fa-circle"></i><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="spotlight-section">
          <div className="spotlight-main reveal">
            <p className="eyebrow"><span></span> New capability</p>
            <i className="fa-solid fa-binoculars spotlight-icon"></i>
            <h2>Watch Tower</h2>
            <p>A monitoring and intelligence platform for public conversation, news, sentiment and key developments.</p>
            <div className="feature-tags"><span>Social listening</span><span>Multilingual analysis</span><span>AI briefs</span><span>Live alerts</span></div>
          </div>
          <div className="spotlight-side reveal">
            <p>Built for leaders who need a clearer picture of what is being said, where it is moving and what needs attention.</p>
            <div className="radar" aria-hidden="true"><i></i><i></i><i></i><span></span></div>
            <small>Coverage depends on authorized APIs, platform permissions and available data.</small>
          </div>
        </section>

        <section id="capabilities" className="section capabilities-section">
          <div className="section-label reveal">04 / CAPABILITIES</div>
          <div className="cap-grid">
            <div className="cap-copy reveal">
              <h2>Modern technology.<br /><span>Chosen for the task.</span></h2>
              <p>We select the stack for each project based on requirements, existing infrastructure, budget, security standards and technical feasibility.</p>
              <div className="tech-cloud">
                {['React.js', 'Next.js', 'Python', 'Node.js', 'Flutter', 'MongoDB', 'PostgreSQL', '.NET', 'Docker', 'LLM APIs', 'NLP', 'CI/CD'].map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
            <div className="sector-panel reveal">
              <h3>Who we serve</h3>
              {sectors.map(([icon, name]) => <div key={name}><i className={`fa-solid ${icon}`}></i><span>{name}</span><i className="fa-solid fa-arrow-right"></i></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-glow"></div>
          <div className="contact-copy reveal">
            <p className="eyebrow"><span></span> Let’s build what matters</p>
            <h2>Have a requirement?<br /><em>Let’s make it real.</em></h2>
            <p>Shreesarv Intelligence brings software development, AI, digital transformation and long-term technical support into one team.</p>
            <a href="#top" className="button button-light">Start the conversation <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
          <div className="promise reveal"><i className="fa-solid fa-check-double"></i><span>Our quality commitment</span><p>Reliable, maintainable and user-friendly solutions with professional execution, appropriate security controls, timely communication and technical documentation.</p></div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="mark">S</span><div><strong>Shreesarv Intelligence Pvt. Ltd.</strong><small>Smart Solutions. Together for a Better Tomorrow.</small></div></div>
        <div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#approach">Approach</a><a href="#capabilities">Capabilities</a></div>
        <p>Information Technology & Digital Solutions</p>
      </footer>
    </div>
  )
}

export default App

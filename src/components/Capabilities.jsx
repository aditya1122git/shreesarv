const sectors = [
  ['fa-landmark', 'Government & PSUs'], ['fa-graduation-cap', 'Education'], ['fa-hospital', 'Healthcare'],
  ['fa-building', 'Enterprise'], ['fa-rocket', 'Startups'], ['fa-hand-holding-heart', 'NGOs'],
  ['fa-bullhorn', 'Media & Communications'],
]

const technologies = ['React.js', 'Next.js', 'Python', 'Node.js', 'Flutter', 'MongoDB', 'PostgreSQL', '.NET', 'Docker', 'LLM APIs', 'NLP', 'CI/CD']

function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities-section">
      <div className="section-label reveal">04 / CAPABILITIES</div>
      <div className="cap-grid">
        <div className="cap-copy reveal">
          <h2>Modern technology.<br /><span>Chosen for the task.</span></h2>
          <p>We select the stack for each project based on requirements, existing infrastructure, budget, security standards and technical feasibility.</p>
          <div className="tech-cloud">{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
        <div className="sector-panel reveal">
          <h3>Who we serve</h3>
          {sectors.map(([icon, name]) => <div key={name}><i className={`fa-solid ${icon}`}></i><span>{name}</span><i className="fa-solid fa-arrow-right"></i></div>)}
        </div>
      </div>
    </section>
  )
}

export default Capabilities

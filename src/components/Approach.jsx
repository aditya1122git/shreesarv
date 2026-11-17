const steps = [
  ['01', 'Understand', 'We study requirements, current systems, objectives and constraints.'],
  ['02', 'Design', 'We define the solution, architecture, interface, features and delivery plan.'],
  ['03', 'Develop', 'We build the software and integrate the technologies the project needs.'],
  ['04', 'Test', 'We check function, compatibility, performance and security.'],
  ['05', 'Deploy', 'We implement in the agreed environment with the required documentation.'],
  ['06', 'Maintain', 'We provide agreed support, upgrades and feature enhancements.'],
]

function Approach() {
  return (
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
  )
}

export default Approach

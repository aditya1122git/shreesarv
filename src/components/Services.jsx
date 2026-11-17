const services = [
  { icon: 'fa-code', title: 'Custom Software Development', text: 'Departmental systems, enterprise applications, ERP, CRM, HRMS, MIS, automation and API integrations.' },
  { icon: 'fa-globe', title: 'Website Development & Management', text: 'Government, corporate and institutional websites, CMS platforms, citizen portals and ongoing maintenance.' },
  { icon: 'fa-mobile-screen-button', title: 'Web & Mobile App Development', text: 'Custom web applications, Android and iOS apps, PWAs, field tools and real-time reporting systems.' },
  { icon: 'fa-wand-magic-sparkles', title: 'AI & Automation', text: 'Generative AI, LLM integrations, chatbots, document processing, multilingual solutions and workflow automation.' },
  { icon: 'fa-bullhorn', title: 'Social Media & Digital Communication', text: 'Content planning, publishing, monitoring, analytics, reputation management and digital outreach campaigns.' },
  { icon: 'fa-landmark', title: 'Government IT & e-Governance', text: 'Administrative portals, scheme monitoring, digital files, citizen services, grievance systems and data integration.' },
  { icon: 'fa-screwdriver-wrench', title: 'Software Maintenance & Support', text: 'AMC services, bug fixing, upgrades, database optimization, deployment support and software modernization.' },
  { icon: 'fa-cloud', title: 'Database, Cloud & Infrastructure', text: 'Database design, cloud hosting, DevOps, migrations, monitoring, backup, disaster recovery and secure configuration.' },
  { icon: 'fa-chart-line', title: 'Data Analytics & Business Intelligence', text: 'Interactive dashboards, data visualization, automated reports, GIS applications and decision-support systems.' },
  { icon: 'fa-shield-halved', title: 'Cybersecurity & Quality Assurance', text: 'Secure development, access control, vulnerability assessment, functional testing and performance testing.' },
  { icon: 'fa-compass-drafting', title: 'IT Consultancy & Digital Transformation', text: 'Requirements, feasibility, architecture, technology selection, system integration, modernization and training.' },
  { icon: 'fa-table-columns', title: 'Dashboard', text: 'Role-based KPI views, project tracking, GIS insights, alerts, drill-down analysis and automated reporting.' },
  { icon: 'fa-binoculars', title: 'Watch Tower', text: 'Social listening, sentiment tracking, news monitoring, multilingual analysis, live alerts and AI-generated briefs.' },
]

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-label light reveal">02 / WHAT WE DO</div>
      <div className="section-heading reveal">
        <h2>13 capabilities for the<br /><span>complete digital journey.</span></h2>
        <p>From requirement discovery to deployment, monitoring and long-term support.</p>
      </div>
      <div className="service-grid service-grid-all">
        {services.map((service, index) => (
          <article className="service-card reveal" key={service.title}>
            <div className="service-top"><span>{String(index + 1).padStart(2, '0')}</span><i className={`fa-solid ${service.icon}`}></i></div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <i className="fa-solid fa-arrow-up-right-from-square card-arrow"></i>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services

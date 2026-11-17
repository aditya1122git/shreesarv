function Spotlight() {
  return (
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
  )
}

export default Spotlight

import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="tag">Admissions open every month</p>
        <h1>IT and AI Training Institute in Pakistan</h1>
        <p>
          100+ certified courses in development, marketing, design,
          cybersecurity and AI, with real projects and job support.
        </p>
        <div className="hero-buttons">
          <Link to="/signup" className="btn btn-orange">Enroll Now</Link>
          <Link to="/courses" className="btn btn-outline-white">Explore Courses</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
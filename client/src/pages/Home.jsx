import { Link } from 'react-router-dom'

const paths = [
  { title: '1 Year Diploma Programs', text: 'Career track learning in software, web, design and marketing.' },
  { title: '6 Months Certified Courses', text: 'Six months in one field with mentor feedback, like MERN development.' },
  { title: '2 to 3 Months Courses', text: 'Short certifications that add one job-ready skill quickly.' },
  { title: 'Professional Bootcamps', text: 'Intensive bootcamps where you build and ship real projects.' },
]

const categories = [
  { title: 'Graphic Designing', image: '/images/design.jpg', text: 'Photoshop, Illustrator and AI tools. Build a portfolio for agency and freelance work.' },
  { title: 'Development', image: '/images/development.jpg', text: 'HTML, JavaScript, React, Node.js and PHP with AI coding assistants.' },
  { title: 'Digital Marketing', image: '/images/marketing.jpg', text: 'SEO, Google Ads, Meta ads and social media marketing.' },
  { title: 'Cyber Security', image: '/images/security.jpg', text: 'Network administration, ethical hacking and threat defence.' },
  { title: 'Ecommerce', image: '/images/ecommerce.jpg', text: 'Set up and grow online stores on Shopify, Daraz and Amazon.' },
  { title: 'IT and Software', image: '/images/software.jpg', text: 'Office productivity, data analysis and IT support skills.' },
]

const stats = [
  { number: '100K+', label: 'Alumni' },
  { number: '100+', label: 'Programs' },
  { number: '300+', label: 'Instructors' },
  { number: '7', label: 'Branches' },
]

const reasons = [
  'Income generating skills',
  'Real project work during training',
  'Internship and job opportunities',
  'On campus and online classes',
  'Experienced industry instructors',
  'Recorded lectures',
]

function Home() {
  return (
    <>
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
  <img src="/images/hero.jpg" alt="Students learning" className="hero-img" />
</section>

      <section className="section">
        <h2 className="section-title">Learning Paths with AI Built In</h2>
        <p className="section-sub">Choose a track that fits your goals and schedule.</p>
        <div className="grid grid-4">
          {paths.map((p, i) => (
            <div className="card" key={i}>
              <span className="card-number">{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section gray">
        <h2 className="section-title">Top IT and AI Course Categories</h2>
        <p className="section-sub">Pick the category that matches your career goal.</p>
        <div className="grid grid-3">
          {categories.map((c, i) => (
  <div className="card card-image" key={i}>
    <img src={c.image} alt={c.title} />
    <div className="card-body">
      <h3>{c.title}</h3>
      <p>{c.text}</p>
      <Link to="/courses" className="card-link">Discover Courses →</Link>
    </div>
  </div>
))}
        </div>
      </section>

      <section className="stats">
        {stats.map((s, i) => (
          <div key={i}>
            <h2>{s.number}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-sub">Skills that pay, taught the way employers use them.</p>
        <ul className="reasons">
          {reasons.map((r, i) => (
            <li key={i}>✔ {r}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home
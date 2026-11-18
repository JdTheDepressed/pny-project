import { useEffect, useState } from 'react'
import axios from 'axios'

function Courses() {
  const [courses, setCourses] = useState([])
  const [category, setCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('/api/courses')
      .then((res) => {
        setCourses(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load courses')
        setLoading(false)
      })
  }, [])

  const categories = ['All', ...new Set(courses.map((c) => c.category))]

  const shown =
    category === 'All' ? courses : courses.filter((c) => c.category === category)

  return (
    <section className="section">
      <h2 className="section-title">Our Courses</h2>
      <p className="section-sub">Choose a course and start learning today.</p>

      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={category === c ? 'filter active' : 'filter'}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {loading && <p className="center-text">Loading courses...</p>}
      {error && <p className="center-text error">{error}</p>}

      <div className="grid grid-3">
        {shown.map((c) => (
          <div className="card" key={c._id}>
            <span className="badge">{c.category}</span>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <p className="course-meta">
              {c.duration} · {c.level}
            </p>
            <p className="course-fee">Rs. {c.fee.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses
import React, { useState, useEffect } from 'react'
import { Star, User } from 'lucide-react'
import { homeCoursesStyles } from '../assets/dummyStyles'
import { coursesData } from '../assets/dummyHdata'
import { useNavigate } from 'react-router-dom'
import { toast, Slide } from 'react-toastify'

const HomeCourses = () => {
  const navigate = useNavigate()

  const { title, course: courseFont, detail } = homeCoursesStyles.fonts

  const visibleCourses = coursesData.slice(0, 8)

  const [userRatings, setUserRatings] = useState(() => {
    try {
      const raw = localStorage.getItem("userCourseRatings")
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  const [hoverRatings, setHoverRatings] = useState({})

  useEffect(() => {
    localStorage.setItem("userCourseRatings", JSON.stringify(userRatings))
  }, [userRatings])

  const showLoginToast = () => {
    toast.error("Please login to access this course", {
      position: "top-right",
      transition: Slide,
      autoClose: 3000,
      theme: "dark",
    })
  }

  const handleCourseClick = (id) => {
    const token = localStorage.getItem("token")
    if (!token) {
      showLoginToast()
      return
    }
    navigate(`/course/${id}`)
  }

  const handleBrowseClick = () => {
    const token = localStorage.getItem("token")
    if (!token) {
      toast.error("Please login to browse all courses", {
        position: "top-right",
        transition: Slide,
        autoClose: 3000,
        theme: "dark",
      })
      return
    }
    navigate("/courses")
  }

  return (
    <div className={homeCoursesStyles.container}>
      <div className={homeCoursesStyles.mainContainer}>
        
        <div className={homeCoursesStyles.header}>
          <h2 className={`${title} ${homeCoursesStyles.title}`}>
            <Star className={homeCoursesStyles.titleIcon} />
            Explore Top Courses
            <Star className={homeCoursesStyles.titleIcon} />
          </h2>
        </div>

        <div className={homeCoursesStyles.coursesGrid}>
          {visibleCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course.id)}
              className={homeCoursesStyles.courseCard}
            >
              <div className={homeCoursesStyles.imageContainer}>
                <img
                  src={course.image}
                  alt={course.name}
                  className={homeCoursesStyles.courseImage}
                />
              </div>

              <div className={homeCoursesStyles.courseInfo}>
                <h3 className={`${courseFont} ${homeCoursesStyles.courseName}`}>
                  {course.name}
                </h3>

                <div className={`${detail} ${homeCoursesStyles.teacherInfo}`}>
                  <User size={16} />
                  <span>{course.teacher}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default HomeCourses
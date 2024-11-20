import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Enrollments({
  currentUser,
  showAllCourses,
  setShowAllCourses,
  // enrolledCourses,
  // setEnrolledCourses,
  courses,
  setCourses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrollments,
  enrollUserInCourse,
  unenrollUserInCourse,
}: {
  currentUser: any;
  showAllCourses: boolean;
  setShowAllCourses: (showAllCourses: boolean) => void;
  // enrolledCourses: any;
  // setEnrolledCourses: (courses: any[]) => void;
  courses: any[];
  setCourses: (courses: any[]) => void;
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrollments: any[];
  enrollUserInCourse: (courseId: any) => void;
  unenrollUserInCourse: (courseId: any) => void;
}) {
  return (
    <div>
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
        {currentUser.role === "STUDENT" && (
          <button
            className="btn btn-primary float-end"
            id="wd-enrollments-btn"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Enrollments" : "All Courses"}
          </button>
        )}
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
              key={course._id}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src={`/images/${course.image || "reactjs.jpg"}`}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                    {currentUser.role === "FACULTY" ? (
                      <span>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </span>
                    ) : !courses
                        // .filter((course) =>
                        //   enrollments.some(
                        //     (enrollment: any) =>
                        //       enrollment.user === currentUser._id &&
                        //       enrollment.course === course._id
                        //   )
                        // )
                        .includes(course) ? (
                      <button
                        className="btn btn-success float-end"
                        id="wd-delete-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          enrollUserInCourse(course._id);
                        }}
                      >
                        Enroll
                      </button>
                    ) : (
                      <button
                        id="wd-edit-course-click"
                        className="btn btn-danger me-2 float-end"
                        onClick={(event) => {
                          event.preventDefault();
                          unenrollUserInCourse(course._id);
                        }}
                      >
                        Unenroll
                      </button>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

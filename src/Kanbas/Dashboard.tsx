import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Enrollments from "./Enrollments";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
export default function Dashboard({
  courses,
  setCourses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  setCourses: (courses: any[]) => void;
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  // const findAllCourses = async () => {
  //   try {
  //     const courses = await courseClient.fetchAllCourses();
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    fetchCourses();
    // findAllCourses();
  }, [currentUser]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <span>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </span>
      )}
      <Enrollments
        showAllCourses={showAllCourses}
        setShowAllCourses={setShowAllCourses}
        courses={courses}
        course={course}
        setCourse={setCourse}
        addNewCourse={addNewCourse}
        deleteCourse={deleteCourse}
        updateCourse={updateCourse}
      />
    </div>
  );
}

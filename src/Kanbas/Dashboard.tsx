import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Enrollments from "./Enrollments";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import * as enrollmentClient from "./Enrollments/client";
import {
  setEnrollments,
  addEnrollment,
  deleteEnrollment,
} from "./Enrollments/reducer";
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
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const enrollUserInCourse = async (courseId: any) => {
    const enrollment = {
      _id: new Date().getTime().toString(),
      user: currentUser._id,
      course: courseId,
    };
    await enrollmentClient.enrollUserInCourse(currentUser._id, courseId);
    dispatch(addEnrollment(enrollment));
  };
  const unenrollUserInCourse = async (courseId: any) => {
    await enrollmentClient.unenrollUserInCourse(currentUser._id, courseId);
    dispatch(deleteEnrollment(courseId));
  };
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      console.log("Courses", courses);
      dispatch(setEnrollments(courses));
      enrollments.map((enrollment: any) => enrollUserInCourse(enrollment._id));
      console.log(enrollments);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAllCourses = async () => {
    const courses = await courseClient.fetchAllCourses();
  };
  useEffect(() => {
    if (showAllCourses) {
      fetchAllCourses();
    } else {
      fetchCourses();
    }
  }, [showAllCourses, currentUser]);
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
        currentUser={currentUser}
        showAllCourses={showAllCourses}
        setShowAllCourses={setShowAllCourses}
        courses={courses}
        setCourse={setCourse}
        deleteCourse={deleteCourse}
        enrollments={enrollments}
        enrollUserInCourse={enrollUserInCourse}
        unenrollUserInCourse={unenrollUserInCourse}
      />
    </div>
  );
}

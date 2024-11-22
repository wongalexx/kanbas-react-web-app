import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import ProtectedCoursesRoute from "./Courses/ProtectedCoursesRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import * as enrollmentClient from "./Enrollments/client";
import {
  addEnrollment,
  deleteEnrollment,
  setEnrollments,
} from "./Enrollments/reducer";
export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const [showAllCourses, setShowAllCourses] = useState(false);
  const dispatch = useDispatch();
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const getUserEnrollments = async () => {
    const userEnrollments = await enrollmentClient.getUserEnrollments(
      currentUser._id
    );
    dispatch(setEnrollments(userEnrollments));
  };
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
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAllCourses = async () => {
    const courses = await courseClient.fetchAllCourses();
    setCourses(courses);
  };

  useEffect(() => {
    if (currentUser) {
      getUserEnrollments();
    }
    if (showAllCourses) {
      fetchAllCourses();
    } else {
      fetchCourses();
    }
  }, [currentUser, enrollments]);
  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account/*" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    currentUser={currentUser}
                    enrollments={enrollments}
                    enrollUserInCourse={enrollUserInCourse}
                    unenrollUserInCourse={unenrollUserInCourse}
                    courses={courses}
                    course={course}
                    showAllCourses={showAllCourses}
                    setShowAllCourses={setShowAllCourses}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <ProtectedCoursesRoute>
                    <Courses courses={courses} />
                  </ProtectedCoursesRoute>
                </ProtectedRoute>
              }
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}

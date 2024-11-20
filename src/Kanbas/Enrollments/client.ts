import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const enrollUserInCourse = async (userId: any, courseId: any) => {
  const { data } = await axios.put(
    `${ENROLLMENTS_API}/${userId}/${courseId}`,
    courseId
  );
  return data;
};
export const unenrollUserInCourse = async (userId: any, courseId: any) => {
  console.log("COURSE AND USER ID", userId, courseId);
  const { data } = await axios.delete(
    `${ENROLLMENTS_API}/${userId}/${courseId}`,
    courseId
  );
  return data;
};

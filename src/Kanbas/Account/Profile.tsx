import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <input id="wd-username"
        placeholder="alice"
        className="form-control mb-2"/>
      <input id="wd-password"
        placeholder="123"
        className="form-control mb-2"/>
      <input id="wd-firstname"
        placeholder="Alice"
        className="form-control mb-2"/>
      <input id="wd-lastname"
        placeholder="Wonderland"
        className="form-control mb-2"/>
      <input
          id="wd-dob"
          type="date"
          className="form-control mb-2"
          placeholder="01/01/2000"/>
      <input
          id="wd-email"
          type="email"
          className="form-control mb-2"
          value="alice@wonderland.com"/>
      <select className="form-control mb-2" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signout-btn"
          to="/Kanbas/Account/Signin"
          className="btn btn-danger w-100">
          Sign out</Link>
    </div>
);}

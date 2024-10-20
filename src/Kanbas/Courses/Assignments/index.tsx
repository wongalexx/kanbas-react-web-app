import '../../styles.css';
import { AiOutlinePlus } from "react-icons/ai";
import { BsGripVertical } from 'react-icons/bs';
import { CiSearch } from "react-icons/ci";
import LessonControlButtons from '../Modules/LessonControlButtons';
import { RxTriangleDown } from "react-icons/rx";
import { FaPlus } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import { MdOutlineAssignment } from 'react-icons/md';
import * as db from "../../Database";
import { useParams } from 'react-router';
export default function Assignments() {
  const { cid, aid } = useParams();
  return (
    <div id="wd-assignments">
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text"><CiSearch /></span>
            <input id="wd-search-assignment" type="text" className="form-control" placeholder="Search..." />
          </div>
        </div>
        <div className="col-md-6 text-end">
          <button id="wd-add-assignment-group" className="btn btn-secondary btn-lg me-1">
            <AiOutlinePlus /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger btn-lg">
            <AiOutlinePlus /> Assignment
          </button>
        </div>
      </div>
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <RxTriangleDown />
            <b>ASSIGNMENTS</b> 
            <div className="float-end">
              <button id="wd-assignments-title-grade-percent" type="button" className="btn btn-outline-secondary" disabled>40% of Total</button>
              <FaPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          {db.assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <div className="row">
              <div className="col text-left">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment color="green" />
              </div>
              <div className="col-9 text-left p-0">  
                <div className="row">
                  <a className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    <b>{assignment.title}</b>
                  </a>
                </div>
                <div className="row">
                  <span className="wd-assignment-description">
                    <span className="red-font me-2">Multiple Modules </span> 
                    <span className="grey-font">
                      | <b>Not available until</b> {assignment.not_available_until} |
                    </span>
                  </span>
                </div>
                <div className="row">
                  <span className="wd-assignment-description">
                    <span className="grey-font">
                      <b>Due</b> {assignment.due} | {assignment.points}pts
                    </span>
                  </span>
                </div>
              </div>
              <div className="col text-right">
                    <LessonControlButtons />
              </div>
            </div>
          </li>))}
        </li>
      </ul>
    </div>
  );
}
  
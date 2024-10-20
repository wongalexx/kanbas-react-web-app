import * as db from "../../Database";
import { useParams } from 'react-router';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" className="form-control mb-3" value={assignment?.title} />
        <textarea className="form-control mb-3" id="wd-description">
          {assignment?.description}
        </textarea>
        <div className="col">
          <div className="row">
            <div className="col">
              <label className="float-end" htmlFor="wd-points">Points</label>
            </div>
            <div className="col-8 mb-3">
              <input className="form-control" id="wd-points" value={assignment?.points} />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="float-end" htmlFor="wd-group">Assignment Group</label>
            </div>
            <div className="col-8">
              <select className="form-select" id="wd-group">
                <option value={"Assignments"}>
                  Assignments</option>
                <option value={"Quiz"}>
                  Quiz</option>
                <option value={"Exam"}>
                  Exam</option>
                <option value={"Project"}>
                  Project</option>
              </select>
            </div>  
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="float-end" htmlFor="wd-display-grade-as">Display Grade as</label>
            </div>
            <div className="col-8">
              <select className="form-select" id="wd-display-grade-as">
                  <option value={"Percentage"}>
                    Percentage</option>
              </select>
            </div>  
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="float-end" htmlFor="wd-submission-type">Submission Type</label>
            </div>
            <div className="col-8">
              <div className="forms">
                <div className="mb-3">
                  <select className="form-select" id="wd-submission-type">
                        <option value={"Online"}>
                            Online</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="wd-submission-type"><b>Online Entry Options</b></label>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-text-entry"/>
                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-website-url"/>
                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-media-recordings"/>
                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-student-annotation"/>
                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wd-file-upload"/>
                    <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="row">
            <div className="col">
              <label className="float-end" htmlFor="wd-assign-to">Assign</label>
            </div>
            <div className="col-8">
              <div className="forms">
                <div className="mb-3">
                  <label htmlFor="wd-assign-to"><b>Assign to</b></label>
                  <input className="form-control" id="wd-assign-to" value={"Everyone"} />
                </div>
                <div className="mb-3">
                  <label htmlFor="wd-due-date" className="form-label"><b>Due</b></label>
                  <div className="input-group">
                    <input
                      id="wd-due-date"
                      type="datetime-local"
                      className="form-control"
                      defaultValue={assignment?.due}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col text-left">
                    <label className="form-label" htmlFor="wd-available-from"><b>Available from</b></label>
                    <input className="form-control" type="datetime-local" id="wd-available-from" defaultValue={assignment?.not_available_until} />
                  </div>
                  <div className="col text-right"> 
                    <label className="form-label" htmlFor="wd-available-until"><b>Until</b></label>
                    <input className="form-control" type="datetime-local" id="wd-available-until" defaultValue={assignment?.due} />
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <hr />
          <div className="mt-3">
            <div className="row float-end">
              <div className="col">
                <a href={`#/Kanbas/Courses/${cid}/Assignments`}>
                  <button id="wd-add-assignment-group" className="btn btn-secondary btn-lg me-1">
                    Cancel
                  </button>
                </a>
                <a href={`#/Kanbas/Courses/${cid}/Assignments`}>
                  <button id="wd-add-assignment" className="btn btn-danger btn-lg">
                    Save
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );}
  
import { LiaCalendarAltSolid } from "react-icons/lia";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" className="form-control mb-3" value="A1" />
        <textarea className="form-control mb-3" id="wd-description">
        The assignment is available online
        Submit a link to the landing page of your Web application running on
        Netlify.
        The landing page should include the following:
        Your full name and section
        Links to each of the lab assignments
        Link to the Kanbas application
        Links to all relevant source code repositories
        The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <div className="col">
          <div className="row">
            <div className="col">
              <label className="float-end" htmlFor="wd-points">Points</label>
            </div>
            <div className="col-8 mb-3">
              <input className="form-control" id="wd-points" value={100} />
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
                      placeholder="May 6, 2024, 12:00 AM"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col text-left">
                    <label className="form-label" htmlFor="wd-available-from"><b>Available from</b></label>
                    <input className="form-control" type="datetime-local" id="wd-available-from" value="2024-05-06" />
                  </div>
                  <div className="col text-right"> 
                    <label className="form-label" htmlFor="wd-available-until"><b>Until</b></label>
                    <input className="form-control" type="datetime-local" id="wd-available-until" value="2024-05-20" />
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="mt-3">
            <div className="row float-end">
              <div className="col">
                <button id="wd-add-assignment-group" className="btn btn-secondary btn-lg me-1">
                  Cancel
                </button>
                <button id="wd-add-assignment" className="btn btn-danger btn-lg">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );}
  
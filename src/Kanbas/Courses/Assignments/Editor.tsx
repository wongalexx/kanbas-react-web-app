export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <p />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Assignment Group</label>
            </td>
            <td align="left" valign="top">
                <select id="wd-group">
                    <option selected value="ASSIGNMENTS">
                        ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <p />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td align="left" valign="top">
                <select id="wd-display-grade-as">
                    <option selected value="PERCENTAGE">
                        Percentage</option>
                </select>
            </td>
          </tr>
          <p />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td align="left" valign="top">
                <select id="wd-submission-type">
                    <option selected value="ONLINE">
                        Online</option>
                </select>
            </td>
          </tr>
          <p />
          <tr>
            <td align="right" valign="top"></td>
            <td align="left" valign="top">
              <label htmlFor="wd-submission-type">Online Entry Options</label><br />
        
              <input type="checkbox" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>

              <input type="checkbox" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

              <input type="checkbox" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label><br/>
            </td>
          </tr>
          <p />
          <tr>
            <td align="right" valign="top"></td>
            <td align="left" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label><br />
                <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <p />
          <tr>
            <td align="right" valign="top"></td>
            <td align="left" valign="top">
                <label htmlFor="wd-due-date">Due</label><br />
                <input type="date" id="wd-due-date" value="2024-05-13"/><br/>
            </td>
          </tr>
          <p />
          <tr>
            <td align="right" valign="top"></td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-from">Available from</label><br />
                <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-until">Until</label><br />
                <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
          </tr>
          <p />
          <tr>
            <td align="left" valign="top"></td>
            <td align="left" valign="top">
                <button>Cancel</button>
                <button>Save</button>
            </td>
          </tr>
        </table>
      </div>
  );}
  
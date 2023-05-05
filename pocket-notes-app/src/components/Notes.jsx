import React, { useState } from "react";
import Standby from "../assets/standby.png";
import Lock from "../assets/lock.png";
import "./Notes.css";

function Notes() {
  const [showStandby, setShowStandby] = useState(false);

  if (showStandby) {
    return (
      <>
        <div>
          <div>
            <img className="standby-image" src={Standby} alt="image" />
          </div>
          <div className="app-name2">Pocket Notes</div>
          <div className="text-under-name">
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </div>
        </div>
        <div className="encryption-text">
          {" "}
          <img className="tiny-lock" src={Lock} alt="" /> end-to-end encrypted
        </div>
      </>
    );
  } else {
    return (
      <div>
        <div>Header will go here</div>
        <div>
            <div>Notes will display here
                <div>the time and day will be here</div>
                <div>the content will go here</div>
            </div>
            <div>the inpuy box will go here</div>
        </div>
      </div>
    );
  }
}

export default Notes;

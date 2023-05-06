import React, { useState } from "react";
import Standby from "../assets/standby.png";
import Lock from "../assets/lock.png";
import Send from "../assets/send.svg";
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
        <div className="parent-notes-area">
          <div>
            Notes will display here
            <div>the time and day will be here</div>
            <div>the content will go here</div>
          </div>
          <div className="notes-area-footer">
            <div className="textarea-wrapper">
              <textarea
                className="input-notes"
                placeholder="Enter your text here..........."
                type="text"
              />
              <button>
                <svg
                  width="35"
                  height="29"
                  viewBox="0 0 35 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
                    fill="#ABABAB"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;

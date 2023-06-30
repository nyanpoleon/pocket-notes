import React, { useState } from "react";
import Standby from "../assets/standby.png";
import Lock from "../assets/lock.png";
import Send from "../assets/send.svg";
import "./Notes.css";

function Notes(props) {
  const { showStandby } = props;
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.elements.textarea.value;
    const date = new Date().toLocaleString();
    const note = { text, date };
    setNotes([...notes, note]);
    localStorage.setItem("notes", JSON.stringify([...notes, note]));
    event.target.elements.textarea.value = "";
  };

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
          {notes.map((note) => (
            <div key={note.date}>
              <div>{note.date}</div>
              <div>{note.text}</div>
            </div>
          ))}
          <div className="notes-area-footer">
            <form className="textarea-wrapper" onSubmit={handleSubmit}>
              <textarea
                id="textarea"
                className="input-notes"
                placeholder="Enter your text here..........."
                type="text"
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    const form = event.currentTarget.form;
                    if (form) {
                      form.dispatchEvent(
                        new Event("submit", { cancelable: true })
                      );
                    }
                  }
                }}
              />
              <button type="submit">
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;

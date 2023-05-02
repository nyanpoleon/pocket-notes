import React, { useState } from "react";
import "../App.css";
import "./Modal.css";
const Modal = () => {
  const [groupName, setGroupName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const CreateButton = () => {
    return (
      <>
        <div>
          <div>Create New Notes</div>
          <input
            type="text"
            placeholder="Enter your group name..."
            value={groupName}
            onChange={(event) => {
              setGroupName(event.target.value);
              if (groupName === "") setIsDisabled(false);
              else setIsEnabled(true);
            }}
          />
        </div>
        <div>Choose Color</div>
        {groupName !== "" && (
          <button onClick={() => setShowModal(false)}>Create</button>
        )}
      </>
    );
  };
  return (
    <>
      <div className="create-btn-div">
        <div onClick={() => setShowModal(true)} className="createBtn">
          + Create Notes group
        </div>
      </div>
      {showModal && (
        <><div className="modal-wrapper"></div>
          <div className="modal-container">
            <div>
              <div>Create New Notes</div>
              <input
                type="text"
                placeholder="Enter your group name..."
                value={groupName}
                onChange={(event) => {
                  setGroupName(event.target.value);
                  if (groupName === "") setIsDisabled(false);
                  else setIsEnabled(true);
                }}
              />
            </div>
            <div>Choose Color</div>
            {groupName == "" ? null : (
              <button onClick={() => setShowModal(false)}>Create</button>
            )}
            {groupName !== "" ? null : (
              <button onClick={() => setShowModal(false)} disabled>
                Create
              </button>
            )}
            {/* {groupName !== "" && (
            <button onClick={() => setShowModal(false)}>Create</button>
          )}  */}
          </div>
        </>
      )}
    </>
  );
};

export default Modal;

import React, { useState } from "react";
import "../App.css";
import "./Modal.css";
const Modal = () => {
  const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];
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
        <>
          <div className="modal-wrapper"></div>
          <div className="modal-container">
            <div>
              <div className="modal-header">Create New Notes</div>
              <label className="modal-text" htmlFor="text">
                Group Name
              </label>
              <input
                className="modal-input"
                id="text"
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
            <div className="modal-text2">
              <label htmlFor="color-btn">Choose Color </label>
              <div id="color-btn">
                {colors.map((color) => (
                  <button 
                  
                  className="color-select"
                  key={color}
                  style={{backgroundColor: color}}
                  onClick={() => console.log(`You selected ${color}`)}/>
                ))}
              </div>
            </div>

            {groupName == "" ? null : (
              <button
                className="modal-create"
                onClick={() => setShowModal(false)}
              >
                Create
              </button>
            )}
            {groupName !== "" ? null : (
              <button
                className="modal-create"
                onClick={() => setShowModal(false)}
                disabled
              >
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

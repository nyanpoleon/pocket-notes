import React, { useState } from "react";
import "../App.css";
import "./Modal.css";

const Modal = () => {
  const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    console.log(`You selected ${color}`);
  };

  const handleCreateClick = () => {
    // const notesGroup = { groupName, selectedColor };
    // localStorage.setItem("notesGroup", JSON.stringify(notesGroup));
    localStorage.setItem("groupName", groupName);
    localStorage.setItem("selectedColor", selectedColor);
    setShowModal(false);
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
                }}
              />
            </div>
            <div className="modal-text2">
              <label htmlFor="color-btn">Choose Color </label>
              <div>
                {colors.map((color) => (
                  <button
                    id="color-btn"
                    className="color-select"
                    key={color}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorClick(color)}
                  />
                ))}
              </div>
            </div>

            {groupName == "" || selectedColor == null ? (
              <button className="modal-create" disabled>
                Create
              </button>
            ) : (
              <button className="modal-create" onClick={handleCreateClick}>
                Create
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Modal;


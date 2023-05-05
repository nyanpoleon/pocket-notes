import React, { useState, useEffect } from "react";
import "./Group.css";

function Group() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);

  return (
    <div>
      {groups.map((group) => (
        <div className="note-group" key={group.groupName}>
          <div
            className="initial-logo"
            style={{
              backgroundColor: group.selectedColor,
            }}
          >
            <div className="initial-text">
              {group.groupName
                .split(" ")
                .map((word) => word.charAt(0))
                .join("")
                .toUpperCase()}
            </div>
          </div>
          <div className="group-title">{group.groupName}</div>
        </div>
      ))}
    </div>
  );
}

export default Group;

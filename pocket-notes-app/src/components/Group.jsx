import React, { useState, useEffect } from "react";
import "./Group.css";

function Group(props) {


  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    props.setGroups(storedGroups);
  }, []);

  return (
    <div>
      {props.groups.map((group) => (
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

import React, { useState, useEffect } from "react";
import "./Group.css"
function Group() {
  const [name, setName] = useState("");
  const [initials, setInitials] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("groupName");
    if (storedName) {
      setName(storedName);
      // Split the name into words and get the first letter of each word
      const nameWords = storedName.split(" ");
      const firstLetters = nameWords.map((word) => word.charAt(0));
      // Combine the first letters into a string and set as initials
      const initialsValue = firstLetters.join("").toUpperCase();
      setInitials(initialsValue);
    }
  }, []);

  return (
    <div className="note-group">
      <div
        className="initial-logo"
        style={{
          backgroundColor: localStorage.getItem("selectedColor"),
        }}
      >
        <div className="initial-text">{initials}</div>
        
      </div>
      <div className="group-title">{name}</div>
    </div>
  );
}

export default Group;

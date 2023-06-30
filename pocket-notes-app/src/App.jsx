import React, { useState } from "react";
import MediaQuery from "react-responsive";
import "./App.css";

import Modal from "./components/Modal";
import Group from "./components/Group";
import Notes from "./components/Notes";

function App() {
  const [showStandby, setShowStandby] = useState(false);
  const [groups, setGroups] = useState([]);

  const handleGroupClick = (groupId) => {
    // Do something with the clicked group ID
  };

  return (
    <>
      <MediaQuery maxWidth={767}></MediaQuery>
      <MediaQuery minWidth={768}>
        <div className="screen">
          <div className="title-half">
            <div className="app-name">Pocket Notes</div>

            <Modal groups={groups} setGroups={setGroups} />

            <div className="notes-title-area">
              <Group
                groups={groups}
                setGroups={setGroups}
                onClick={handleGroupClick}
              />
            </div>
          </div>

          <div className="notes-half">
            <Notes showStandby={showStandby} />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default App;

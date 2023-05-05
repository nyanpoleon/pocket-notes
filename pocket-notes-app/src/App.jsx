import React, { useState } from "react";
import MediaQuery from "react-responsive";
import "./App.css";
// import Standby from "./assets/standby.png";
// import Lock from "./assets/lock.png";
import Modal from "./components/Modal";
import Group from "./components/Group";
import Notes from "./components/Notes";
function App() {
  const [showStandby, setShowStandby] = useState(false);
  const [groups, setGroups] = useState([]);
  return (
    <>
      <MediaQuery maxWidth={767}></MediaQuery>
      <MediaQuery minWidth={768}>
        <div className="screen">
          <div className="title-half">
            <div className="app-name">Pocket Notes</div>

            <Modal groups={groups} setGroups={setGroups} />

            <div className="notes-title-area">
              <Group groups={groups} setGroups={setGroups} />
            </div>
          </div>

          <div className="notes-half">
            <Notes />
            {/* <div>
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
              <img className="tiny-lock" src={Lock} alt="" /> end-to-end
              encrypted
            </div> */}
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default App;

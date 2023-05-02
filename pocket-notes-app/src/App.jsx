import MediaQuery from "react-responsive";
import "./App.css";
import Standby from "./assets/standby.png";
import Lock from "./assets/lock.png";
import Modal from "./components/Modal"

function App() {
  return (
    <>
      <MediaQuery maxWidth={767}>
        {/*<div className="mobile">
          <div className="header">Pocket Notes</div>
          <div className="create-button">
            <button>+ Create Notes</button>
          </div>
          <div className="notes-heading">
            <div className="title-half">
              this area will contain the name of the app,
              it will also contian, the create button,
              and the created notes with their title 
              <div className="app-name">Pocket Notes</div>
              <div className="create-btn-div">
                <button className="createBtn"></button>
              </div>
              
            </div>
            <div className="notes-half">
              <div className="notes header">
                <div className="empt-area">
                  <div className="no-select-note-image">
                    
                  </div>
                  <div>encryption text</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <div className="screen">
          <div className="title-half">
            {/* this area will contain the name of the app,
              it will also contian, the create button,
              and the created notes with their title */}
            <div className="app-name">Pocket Notes</div>
            {/* <div className="create-btn-div">
              <button className="createBtn">+ Create Notes group</button>
            </div> */}
            <Modal />
            {/* <Popup className="modal">

            </Popup> */}
            
            <div className="notes-title-area">
              <>a prop will go here for the title</>
            </div>
          </div>
          <div className="notes-half">
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
              <img className="tiny-lock" src={Lock} alt="" /> end-to-end
              encrypted
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default App;

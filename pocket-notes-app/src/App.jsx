import MediaQuery from "react-responsive";
import "./App.css";

function App() {
  return (
    
    <>
      <MediaQuery maxWidth={767}>
        <div className="mobile">
          <div className="header">Pocket Notes</div>
          <div className="create-button">
            <button>+ Create Notes</button>
          </div>
          <div className="notes-heading">
            <div className="title-half">
              {/* this area will contain the name of the app,
              it will also contian, the create button,
              and the created notes with their title */}
              <div className="app-name">Pocket Notes</div>
              <div className="create-btn-div">
                <button className="createBtn"></button>
              </div>
              <div className="notes-title-area">
                <>a prop will go here for the title</>
              </div>
            </div>
            <div className="notes-half">
              <div className="notes header">
                <div className="empt-area">
                  <div className="no-select-note-image">
                    <img src="" alt="" />
                  </div>
                  <div>encryption text</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <div className="screen">
          <div className="title-half">
            {/* this area will contain the name of the app,
              it will also contian, the create button,
              and the created notes with their title */}
            <div className="app-name">Pocket Notes</div>
            <div className="create-btn-div">
              <button className="createBtn">+ Create Notes Group</button>
            </div>
            <div className="notes-title-area">
              <>a prop will go here for the title</>
            </div>
          </div>
          <div className="notes-half">
            <div>
              <img src="" alt="" />
            </div>
            <div>Pocket Notes</div>
            <div>
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </div>
            <div>end-to-end encrypted</div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default App;
